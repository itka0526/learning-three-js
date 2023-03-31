const appendToHeadElement = (t: HTMLMetaElement) => document.getElementsByTagName("head")[0].appendChild(t);

const createTHREEJSMetaTag = () => {
    const meta = document.createElement("meta");
    meta.name = "viewport";
    meta.content = "width=device-width, initial-scale=1.0";

    appendToHeadElement(meta);
};

export { createTHREEJSMetaTag };
