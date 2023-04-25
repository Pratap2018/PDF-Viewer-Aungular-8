import { Component } from '@angular/core';
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib'
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css',
  ]
})
export class AppComponent {
  title = 'Pdf Viewer';
  pdfDoc = null;
  forms = new Map();
  constructor(@Inject(DOCUMENT) document: Document) {

    const SEARCH_FOR = "";

    // @ts-ignore
    pdfjsLib.GlobalWorkerOptions.workerSrc = '../assets/pdf.worker.js';


    // @ts-ignore
    const eventBus = new pdfjsViewer.EventBus()

    // @ts-ignore
    const pdfLinkService = new pdfjsViewer.PDFLinkService({
      eventBus,
    });

    // @ts-ignore
    const pdfFindController = new pdfjsViewer.PDFFindController({
      eventBus,
      linkService: pdfLinkService,
    });

    // @ts-ignore
    const pdfScriptingManager = new pdfjsViewer.PDFScriptingManager({
      eventBus,
      sandboxBundleSrc: '../assets/build/pdf.sandbox.js',
    });






    (async function () {

      // ussing pdf-lib a diffrent library to fill the form fields
      const formPdfBytes = await fetch('../assets/sample2.pdf').then(res => res.arrayBuffer())
      const emblemImageBytes = await fetch('../assets/Signature.png').then(res => res.arrayBuffer())
      const emblemImageBytes1 = await fetch('../assets/hypersign.jpg').then(res => res.arrayBuffer())

      const pdfDocLIB = await PDFDocument.load(formPdfBytes)

        console.log(pdfDocLIB);
        

      const data = await pdfDocLIB.getForm().getField('the Effective Date by and between')
      // @ts-ignore


      await pdfDocLIB.getForm().getButton('Signature-Image-4_af_image')
        .setImage(await pdfDocLIB.embedJpg(emblemImageBytes1))
      await pdfDocLIB.getForm().getButton('Signature-Image-1_af_image')
        .setImage(await pdfDocLIB.embedPng(emblemImageBytes))
      await pdfDocLIB.getForm().getButton('Signature-Image-2_af_image')
        .setImage(await pdfDocLIB.embedPng(emblemImageBytes))
      await pdfDocLIB.getForm().getButton('Signature-Image-3_af_image')
        .setImage(await pdfDocLIB.embedPng(emblemImageBytes))
      const pdfDocBytes = await pdfDocLIB.saveAsBase64({ dataUri: true })
      // @ts-ignore

      const loadingTask = pdfjsLib.getDocument({
        url: pdfDocBytes,
        cMapUrl: '../assets/cmaps/',
        cMapPacked: true,
        enableXfa: true,
      });

      loadingTask.promise.then(async function (pdfDocument) {

        
        



        const page = await pdfDocument.getPage(1);
        
        const annotations = await page.getAnnotations();
     

       


        const container = document.getElementById("viewerContainer");


        // @ts-ignore
        const pdfViewer = new pdfjsViewer.PDFViewer({
          container,
          eventBus,
          linkService: pdfLinkService,
          findController: pdfFindController,
          scriptingManager: pdfScriptingManager,
          toolbar: {
            numPages: {
              pageNumber: {
                type: "pageNumber",
                maxDigits: 4,
              },
            }

          }
        });
        pdfLinkService.setViewer(pdfViewer);
        pdfScriptingManager.setViewer(pdfViewer);

        eventBus.on("pagesinit", function () {
          // We can use pdfViewer now, e.g. let's change default scale.
          pdfViewer.currentScaleValue = "page-width";

          // We can try searching for things.
          if (SEARCH_FOR) {
            eventBus.dispatch("find", { type: "", query: SEARCH_FOR });
          }
        });
        // Document loaded, specifying document for the viewer and
        // the (optional) linkService.
        pdfViewer.setDocument(pdfDocument);

        pdfLinkService.setDocument(pdfDocument, null);
      })
    })();

  }

}



