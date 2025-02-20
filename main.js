const exportFillName = document.querySelector('.export');
const importFillName = document.querySelector('.import');
const exportInput = document.querySelector('.export-value');
const importInput = document.querySelector('.import-value');

let changeControl = 1;

let CalInchValue;
let CalPixelValue;

function convert() {
    const exportValue = parseFloat(exportInput.value);
    function PixelToInch() {
        const InchValue = exportValue / 96;
        CalInchValue = InchValue;
        importInput.value = Math.ceil(InchValue * 100) / 100;
    }

    function InchToPixel() {
        const pixelValue = exportValue * 96;
        CalPixelValue = pixelValue;
        importInput.value = Math.ceil(pixelValue * 100) / 100;
    }

    if (changeControl === 1) {
        InchToPixel();
    } else {
        PixelToInch();
    }
}

const selectOptin = document.querySelector('.select-optin');

selectOptin.addEventListener('change', function () {
    if (selectOptin.value === 'ItoP') {
        exportFillName.innerHTML = 'INCH :';
        importFillName.innerHTML = 'PIXEL :';
        changeControl = 1;

        // Swap the values between exportInput and importInput
        let temp = exportInput.value;
        exportInput.value = importInput.value;
        importInput.value = temp;

        convert();
    } else {
        exportFillName.innerHTML = 'PIXEL :';
        importFillName.innerHTML = 'INCH :';
        changeControl = 0;

        // Swap the values between exportInput and importInput
        let temp = exportInput.value;
        exportInput.value = importInput.value;
        importInput.value = temp;

        convert();
    }
});

exportInput.addEventListener('input', convert);
