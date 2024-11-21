let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}

import { FaviconSettings, MasterIcon, generateFaviconFiles, generateFaviconHtml } from '@realfavicongenerator/generate-favicon';
import { getNodeImageAdapter, loadAndConvertToSvg } from "@realfavicongenerator/image-adapter-node";

const imageAdapter = await getNodeImageAdapter();

// This is the icon that will be transformed into the various favicon files
const masterIcon: MasterIcon = {
  icon: await loadAndConvertToSvg("path/to/master-icon.svg"),
}

const faviconSettings: FaviconSettings = {
  icon: {
    desktop: {
      regularIconTransformation: {
        type: IconTransformationType.Brightness,
        brightness: 0.1,
      },
      darkIconType: "regular",
      darkIconTransformation: {
        type: IconTransformationType.Brightness,
        brightness: 1,
      },
    },
    touch: {
      transformation: {
        type: IconTransformationType.None,
      },
      appTitle: null
    },
    webAppManifest: {
      transformation: {
        type: IconTransformationType.Background,
        backgroundColor: "#000000",
        backgroundRadius: 0,
        imageScale: 0.8,
      },
      backgroundColor: "#ffffff",
      themeColor: "#ffffff",
      name: "Meganjar",
      shortName: "M Jar"
    }
  },
  path: "/https://meganjar.com/my-favicon/",
};

// Generate files
const files = await generateFaviconFiles(masterIcon, faviconSettings, imageAdapter);
// Do something with the files: store them, etc.

// Generate HTML
const html = await generateFaviconHtml(faviconSettings);
// Do something with the markups: store them, inject them in your HTML pages, etc.
