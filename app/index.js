import Unsplash, { toJson } from 'unsplash-js';

const unsplash = new Unsplash({
  applicationId: "c59a10355455dc90b79f6e542c61150ad29df9de215edaa582f5103f7b67bea4",
  secret: "1dbd4644e923b93a3f45ac77f488161bb82fe2636fc771b2dff917abd8298482",
  callbackUrl: "urn:ietf:wg:oauth:2.0:oob"
});

const images = [];

function setPicture(element) {
    if (images.length > 0) {
        const url = images.pop().urls.regular.replace('w=1080', 'w=1920');
        var img = new Image();
        img.onload = () => {
            element.style.backgroundImage = `url('${url}')`;
            setTimeout(() => setPicture(element), 10000);
        };
        img.src = url;
        console.log('3', images);
    } else {
        setTimeout(() => getPictures(element), 500);
    }
}

function getPictures(element) {
    unsplash.photos.getRandomPhoto({orientation: 'landscape', query: 'nature', count: 30})
        .then(toJson)
        .then(json => {
            console.log('1', images);
            json.map(item => images.push(item));
            console.log('2', images);
            setPicture(element);
        });
}

function component () {
    var element = document.createElement('div');
    element.style.width = '100vw';
    element.style.height = '100vh';
    element.style.backgroundSize = 'cover';
    element.style.backgroundPositionY = 'center';
    setPicture(element);
    return element;
}

document.body.appendChild(component());
