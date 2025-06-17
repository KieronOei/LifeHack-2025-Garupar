function updateProduct(arr, productID) {
    const [imgSrc, pdtLink] = arr;

    const product = document.getElementById(productID);

    product.querySelector('.pdt-link').href = pdtLink;
    product.querySelector('img').src = imgSrc;

    getInfo(pdtLink).then(arr => {
        product.querySelector('.subheading').textContent = arr[0];
        const id = product.querySelector('.circle').id;

        progressCircle({ targetPercent: arr[1], size: 50, containerId: id });
        product.querySelector('.button').href = arr[2];

    })
}
