
import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';


declare var cv;
@Component({
    selector: 'app-examp1',
    templateUrl: './examp1.component.html',
    styleUrls: ['./examp1.component.css']
})
export class Examp1Component implements OnInit {

    constructor() { }



    title = 'opencvJS';
    mat;


    @ViewChild("img") img: ElementRef;
    @ViewChild("canvasFrame") canvas: ElementRef;
    @ViewChild("videoEl") videoEl: ElementRef;

    video: HTMLVideoElement;

    next;
    prvs: any;

    ngOnInit() {
        this.videoInit();
    }

    // upload(evt) {
    //     console.log(evt);
    //     const imgElement = this.img.nativeElement;
    //     imgElement.src = URL.createObjectURL(evt.target.files[0]);

    //     imgElement.onload = function () {
    //         console.log("loaded");

    //         this.mat = cv.imread(imgElement);
    //         cv.imshow("canvasOutput", this.mat);
    //     };
    // }

    videoInit() {
        this.video = this.videoEl.nativeElement;
        navigator.mediaDevices.getUserMedia({ video: true, audio: false })
            .then((stream) => {
                this.video.srcObject = stream;
                this.video.play();
                this.playVideo();
                console.log(" GOto VIDEO ");
            })
            .catch(function (err) {
                console.log("An error occurred! " + err);
            });
    }

    playVideo() {
        // tslint:disable-next-line:max-line-length
        let canvasFrame: HTMLCanvasElement = this.canvas.nativeElement; // canvasFrame is the id of <canvas>
        let context = canvasFrame.getContext("2d");
        const height = 200;
        const width = 200;
        let src = new cv.Mat(height, width, cv.CV_8UC4);
        let dst = new cv.Mat(height, width, cv.CV_8UC1);
        this.next = new cv.Mat(height, width, cv.CV_8UC1);
        const FPS = 30;
        const processVideo = () => {
            let begin = Date.now();
            context.drawImage(this.video, 0, 0, width, height);
            src.data.set(context.getImageData(0, 0, width, height).data);
            cv.cvtColor(src, dst, cv.COLOR_RGBA2GRAY);
            cv.imshow("canvasOutput", dst); // canvasOutput is the id of another <canvas>;
            // schedule next one.
            let delay = 1000 / FPS - (Date.now() - begin);
            this.processVid(src);
            setTimeout(processVideo, delay);
        };

        // schedule first one.

        setTimeout(processVideo, 0);
    }

    processVid(src) {

        // cv.cvtColor(src, this.next, cv.COLOR_BGR2GRAY);

        // const flow = cv.calcOpticalFlowFarneback(this.next, this.next, null , 0.5, 3, 15, 3, 5, 1.2, 0);

        // const res = cv.cartToPolar(flow[0], flow[1]);

        // const mag = res.mag;
        // const ang = res.ang;

        // const hsv = [];

        // hsv[0] = ang * 180 / Math.PI / 2;
        // hsv[2] = cv.normalize(mag, cv.None, 0, 255, cv.NORM_MINMAX);

        // const rgb = cv.cvtColor(hsv, cv.COLOR_HSV2BGR);

        // cv.imshow('canvasOutput2', rgb);
        // this.prvs = this.next;
    }
}

