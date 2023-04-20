import { Component } from '@angular/core';
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

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




    // @ts-ignore
    const loadingTask = pdfjsLib.getDocument({
      url: '../assets/sample2.pdf',
      cMapUrl: '../assets/cmaps/',
      cMapPacked: true,
      enableXfa: true,
    });

    (function () {
      loadingTask.promise.then(function (pdfDocument) {
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

          }});
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



