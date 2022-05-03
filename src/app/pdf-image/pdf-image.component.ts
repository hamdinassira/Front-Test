import { PdfServiceService } from './../shared/services/pdf-service.service';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse, HttpEventType, HttpResponse } from '@angular/common/http';
//import jsPDF from 'jspdf';
import { Byte } from '@angular/compiler/src/util';
import * as jsPDF from 'jspdf';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-pdf-image',
  templateUrl: './pdf-image.component.html',
  styleUrls: ['./pdf-image.component.css']
})
export class PdfImageComponent implements OnInit {
id;
  currentFileUpload: File;
  currentProduct: any;
  progress: number;
  timestamp: any;
  //image:Byte='';
  fileName: string;
  filePreview: string;
  invoiceId: number;
  constructor(private pdfService: PdfServiceService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  sanitize(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
  onUploadFiles(files: File[]): void {
    const formData = new FormData();
    for (const file of files) { formData.append('files', file, file.name); }
    this.pdfService.uploadPhoto(formData).subscribe((event)=>{
      if(event.type===HttpEventType.UploadProgress){
        this.progress=Math.round(100*event.loaded / event.total);

      }
      else if(event instanceof HttpResponse){
         alert("photo chargée avec succés et enregistré dans un document pdf")
        // this.getProduit();
        this.timestamp=Date.now();

      }
    },
      err=>{
        alert("Probléme de téléchargement");



       } )  }

//   generePDF(){

//     this.pdfService.generatePDF()
//       .subscribe(
//         (data: Blob) => {
//           var file = new Blob([data], { type: 'application/pdf' })
//           var fileURL = URL.createObjectURL(file);

// // if you want to open PDF in new tab
//           window.open(fileURL);
//           var a         = document.createElement('a');
//           a.href        = fileURL;
//           a.target      = '_blank';
//           a.download    = 'bill.pdf';
//           document.body.appendChild(a);
//           a.click();
//           console.log("fichier creer avec succes")
//         },
//         (error) => {
//           console.log('getPDF error: ',error);
//         }
//       );
//     }
    getTS(){
      return this.timestamp;
    }
}
