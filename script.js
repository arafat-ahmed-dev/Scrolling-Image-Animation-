// const canvas = document.querySelector("canvas");
// const context = canvas.getContext("2d");

// const frames = {
//     currentIndex : 0,
//     maxIndex : 382
// }
// let imgCount = 0;
// let images = [];
// function preloader() {
//     let imgCount = 0; // Initialize imgCount

//     for (let i = 1; i <= frames.maxIndex; i++) {
//         const imageUrl = `./frames/frame_${i.toString().padStart(4, "0")}.jpeg`;
//         const img = new Image();
//         img.src = imageUrl;

//         img.onload = () => {
//             imgCount++;
//             if (imgCount === frames.maxIndex) {
//                 loadImage(frames.currentIndex);
//                 startAnimation();
//             }
//         };

//         img.onerror = () => {
//             console.error(`Failed to load image at ${imageUrl}`);
//         };

//         images.push(img);
//     }
// }
// function loadImage(index) {
//     if (index >= 0 && index <= frames.maxIndex) {
//         const img = images[index];

//         img.onload = function() {
//             canvas.width = window.innerWidth;
//             canvas.height = window.innerHeight;

//             const scaleX = canvas.width / img.width;
//             const scaleY = canvas.height / img.height;
//             const scale = Math.max(scaleX, scaleY);

//             const newWidth = img.width * scale;
//             const newHeight = img.height * scale;

//             const offsetX = (canvas.width - newWidth) / 2;
//             const offsetY = (canvas.height - newHeight) / 2;

//             context.clearRect(0, 0, canvas.width, canvas.height);
//             context.imageSmoothingEnabled = true;
//             context.imageSmoothingQuality = "high";
//             context.drawImage(img, offsetX, offsetY, newWidth, newHeight);
//             frames.currentIndex = index;
//         };

//         img.onerror = function() {
//             console.error("Failed to load image at index " + index);
//         };

//         // Trigger the image loading
//         img.src = img.src; // This line may be redundant if the image is already loaded
//     }
// }
// function startAnimation() {
//     gsap.registerPlugin(ScrollTrigger);
//     var tl = gsap.timeline({
//         scrollTrigger: {
//             trigger: ".parent",
//             start: "top top",
//             end:"bottom bottom",
//             scrub: 2,
//             markers: true
//         }
//     })
//     tl.to(frames,{
//         currentIndex: frames.maxIndex,
//         onUpdate: function () {
//             loadImage(Math.floor(frames.currentIndex))
//         }
//     })
// }

// preloader();

const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

const frames = {
    currentIndex: 0,
    maxIndex: 382
};
let imgCount = 0;
let images = [];

function preloader() {
    let imgCount = 0; // Initialize imgCount

    for (let i = 1; i <= frames.maxIndex; i++) {
        const imageUrl = `./frames/frame_${i.toString().padStart(4, "0")}.jpeg`;
        const img = new Image();
        img.src = imageUrl;

        img.onload = () => {
            imgCount++;
            if (imgCount === frames.maxIndex) {
                loadImage(frames.currentIndex);
                startAnimation();
            }
        };

        img.onerror = () => {
            console.error(`Failed to load image at ${imageUrl}`);
        };

        images.push(img);
    }
}

function loadImage(index) {
    if (index >= 0 && index <= frames.maxIndex) {
        const img = images[index];

        img.onload = function() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            const scaleX = canvas.width / img.width;
            const scaleY = canvas.height / img.height;
            const scale = Math.max(scaleX, scaleY);

            const newWidth = img.width * scale;
            const newHeight = img.height * scale;

            const offsetX = (canvas.width - newWidth) / 2;
            const offsetY = (canvas.height - newHeight) / 2;

            context.clearRect(0, 0, canvas.width, canvas.height);
            context.imageSmoothingEnabled = true;
            context.imageSmoothingQuality = "high";
            context.drawImage(img, offsetX, offsetY, newWidth, newHeight);
            frames.currentIndex = index;
        };

        img.onerror = function() {
            console.error("Failed to load image at index " + index);
        };

        // Trigger the image loading
        img.src = img.src; // This line may be redundant if the image is already loaded
    }
}

function startAnimation() {
    gsap.registerPlugin(ScrollTrigger); // Register the ScrollTrigger plugin

    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".parent",
            start: "top top",
            end: "bottom bottom",
            scrub: 2,
            markers: true
        }
    });
    tl.to(frames, {
        currentIndex: frames.maxIndex,
        onUpdate: function() {
            loadImage(Math.floor(frames.currentIndex));
        }
    });
}

preloader();
