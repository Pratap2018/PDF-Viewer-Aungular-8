import { Component } from '@angular/core';
import pdfjsLib from 'pdfjs-dist';

import pdfViewer_proxy from 'pdfjs-dist/web/pdf_viewer.js';
const pdfViewer = pdfViewer_proxy.PDFJS

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css',
]
})
export class AppComponent {
  title = 'Pdf Viewer';
  pdfDoc = null;

  constructor() {
    const eventBus = new pdfViewer.EventBus()
    console.log(pdfViewer);
    




    pdfjsLib.PDFJS.workerSrc = 'assets/pdf.worker.js';
    const loadingTask = pdfjsLib.getDocument({
      url: 'assets/sample2.pdf',
      cMapPaked: true,
      cMapUrl: 'https://www.unpkg.com/browse/pdfjs-dist@1.10.100/cmaps',
      enableXfa: true

    });
    this.pdfDoc = loadingTask.promise;
    console.log('PDFDOC', this.pdfDoc);
    this.pdfDoc.then((pdf) => {
      pdf.getPage(1).then((page) => {
        page.getAnnotations().then((annotations) => {
          console.log('Annotations', annotations);
        })
       const  container = document.createElement('div')
        container.setAttribute('id', 'pageContainer')
        container.setAttribute('class', 'pdfViewer singlePageView')
        const pdfPageView = new pdfViewer.PDFPageView({
          container: container,
          id: 1,
          scale: 1,
          defaultViewport: page.getViewport(1),
          eventBus: eventBus,
          
          textLayerFactory: new pdfViewer.DefaultTextLayerFactory(),
          annotationLayerFactory:  new pdfViewer.DefaultAnnotationLayerFactory(),
          renderInteractiveForms: true,
          xfaLayerFactory: this.pdfDoc.isPureXfa
          ? new pdfViewer.DefaultXfaLayerFactory()
          : null,


        })

        

        pdfPageView.setPdfPage(page);
        pdfPageView.draw();

        console.log(container);
        

        document.getElementById('pdfContainer').appendChild(container)
      })


    })

  }

}



