import { Component } from '@angular/core';

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
  constructor() {
    // @ts-ignore
    pdfjsLib.GlobalWorkerOptions.workerSrc = '../assets/pdf.worker.js';
    // @ts-ignore
    const loadingTask = pdfjsLib.getDocument({
      url: '../assets/sample2.pdf',
      cMapUrl: '../assets/cmaps/',
      cMapPacked: true,
    });

    loadingTask.promise.then(async (pdf) => {
      console.log('PDF loaded');
      this.pdfDoc = pdf;
      const page = await this.pdfDoc.getPage(1)
      const annotationData = await page.getAnnotations()
      annotationData[0].fieldValue = "2nd"
      annotationData[1].fieldValue = "RANDOM DATA"
      annotationData[2].fieldValue = "23"
      annotationData[3].fieldValue = "Random ONE"
      annotationData[4].fieldValue = "Random TWO"


      const container = document.getElementById('pdfContainer')

      container.setAttribute('class', 'pdfViewer singlePageView')
      
      // @ts-ignore
      const eventBus = new pdfjsViewer.EventBus()
      // @ts-ignore
      const pdfPageView = new pdfjsViewer.PDFPageView({
        container,
        id: 1,
        scale: 1,
        // @ts-ignore
        defaultViewport: page.getViewport({ scale: 1 }),
        eventBus,
        // @ts-ignore

        textLayerFactory: !this.pdfDoc.isPureXfa
          // @ts-ignore

          ? new pdfjsViewer.DefaultTextLayerFactory()
          : null,
        // @ts-ignore
        annotationLayerFactory: new pdfjsViewer.DefaultAnnotationLayerFactory(),
        // @ts-ignore

        xfaLayerFactory: this.pdfDoc.isPureXfa
          // @ts-ignore
          ? new pdfjsViewer.DefaultXfaLayerFactory()
          : null,
        // @ts-ignore

        renderInteractiveForms: true



      })



      pdfPageView.setPdfPage(page);






      pdfPageView.draw();


      document.getElementById('download').addEventListener('click', async () => {

        const annotationData = await page.getAnnotations()
        for (let idx in annotationData) {
          this.forms.set(annotationData[idx].id, annotationData[idx].fieldValue)
        }
        annotationData.forEach(e => {
          // @ts-ignore
          const value = document.getElementById('pdfjs_internal_id_' + e.id).value

          if (value === undefined) {

            return
          }
          e.fieldValue = value
        })
        this.forms.forEach((value, key) => {
          // @ts-ignore
          const inputValue = document.getElementById('pdfjs_internal_id_' + key).value
          if (inputValue === undefined) {
            return
          }
          this.forms.set(key, inputValue)
          console.log(key, inputValue);
          
          this.pdfDoc.annotationStorage.setValue(key, { value: inputValue })



        })

        
        this.pdfDoc.saveDocument(this.pdfDoc.annotationStorage).then(data => {
          let fileName = 'download.pdf'
          const blob = new Blob([data], { type: 'application/pdf' });
          const a = document.createElement('a');

          a.download = fileName;
          a.href = URL.createObjectURL(blob);
          a.dataset.downloadurl = [fileName, a.download, a.href].join(':');
          a.style.display = "none";
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
        })



      })




    });




  }

}



