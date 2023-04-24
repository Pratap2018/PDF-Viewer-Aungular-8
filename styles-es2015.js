(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/assets/web/pdf_viewer.css":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/assets/web/pdf_viewer.css ***!
  \********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* Copyright 2014 Mozilla Foundation\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *     http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n\n.textLayer {\n  position: absolute;\n  text-align: initial;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  overflow: hidden;\n  opacity: 0.2;\n  line-height: 1;\n  -webkit-text-size-adjust: none;\n     -moz-text-size-adjust: none;\n          -ms-text-size-adjust: none;\n      text-size-adjust: none;\n  forced-color-adjust: none;\n}\n\n.textLayer span,\n.textLayer br {\n  color: transparent;\n  position: absolute;\n  white-space: pre;\n  cursor: text;\n  transform-origin: 0% 0%;\n}\n\n/* Only necessary in Google Chrome, see issue 14205, and most unfortunately\n * the problem doesn't show up in \"text\" reference tests. */\n\n.textLayer span.markedContent {\n  top: 0;\n  height: 0;\n}\n\n.textLayer .highlight {\n  margin: -1px;\n  padding: 1px;\n  background-color: rgba(180, 0, 170, 1);\n  border-radius: 4px;\n}\n\n.textLayer .highlight.appended {\n  position: initial;\n}\n\n.textLayer .highlight.begin {\n  border-radius: 4px 0 0 4px;\n}\n\n.textLayer .highlight.end {\n  border-radius: 0 4px 4px 0;\n}\n\n.textLayer .highlight.middle {\n  border-radius: 0;\n}\n\n.textLayer .highlight.selected {\n  background-color: rgba(0, 100, 0, 1);\n}\n\n.textLayer ::-moz-selection {\n  background: rgba(0, 0, 255, 1);\n}\n\n.textLayer ::selection {\n  background: rgba(0, 0, 255, 1);\n}\n\n/* Avoids https://github.com/mozilla/pdf.js/issues/13840 in Chrome */\n\n.textLayer br::-moz-selection {\n  background: transparent;\n}\n\n.textLayer br::selection {\n  background: transparent;\n}\n\n.textLayer .endOfContent {\n  display: block;\n  position: absolute;\n  left: 0;\n  top: 100%;\n  right: 0;\n  bottom: 0;\n  z-index: -1;\n  cursor: default;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          -ms-user-select: none;\n      user-select: none;\n}\n\n.textLayer .endOfContent.active {\n  top: 0;\n}\n\n:root {\n  --annotation-unfocused-field-background: url(\"data:image/svg+xml;charset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13);'/></svg>\");\n}\n\n@media (forced-colors: active) {\n  .annotationLayer .textWidgetAnnotation input:required,\n  .annotationLayer .textWidgetAnnotation textarea:required,\n  .annotationLayer .choiceWidgetAnnotation select:required,\n  .annotationLayer .buttonWidgetAnnotation.checkBox input:required,\n  .annotationLayer .buttonWidgetAnnotation.radioButton input:required {\n    outline: 1.5px solid selectedItem;\n  }\n}\n\n.annotationLayer {\n  position: absolute;\n  top: 0;\n  left: 0;\n  pointer-events: none;\n  transform-origin: 0 0;\n}\n\n.annotationLayer section {\n  position: absolute;\n  text-align: initial;\n  pointer-events: auto;\n  box-sizing: border-box;\n  transform-origin: 0 0;\n}\n\n.annotationLayer .linkAnnotation > a,\n.annotationLayer .buttonWidgetAnnotation.pushButton > a {\n  position: absolute;\n  font-size: 1em;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.annotationLayer .buttonWidgetAnnotation.pushButton > canvas {\n  width: 100%;\n  height: 100%;\n}\n\n.annotationLayer .linkAnnotation > a:hover,\n.annotationLayer .buttonWidgetAnnotation.pushButton > a:hover {\n  opacity: 0.2;\n  background: rgba(255, 255, 0, 1);\n  box-shadow: 0 2px 10px rgba(255, 255, 0, 1);\n}\n\n.annotationLayer .textAnnotation img {\n  position: absolute;\n  cursor: pointer;\n  width: 100%;\n  height: 100%;\n}\n\n.annotationLayer .textWidgetAnnotation input,\n.annotationLayer .textWidgetAnnotation textarea,\n.annotationLayer .choiceWidgetAnnotation select,\n.annotationLayer .buttonWidgetAnnotation.checkBox input,\n.annotationLayer .buttonWidgetAnnotation.radioButton input {\n  background-image: var(--annotation-unfocused-field-background);\n  border: 1px solid transparent;\n  box-sizing: border-box;\n  font: calc(9px * var(--scale-factor)) sans-serif;\n  height: 100%;\n  margin: 0;\n  vertical-align: top;\n  width: 100%;\n}\n\n.annotationLayer .textWidgetAnnotation input:required,\n.annotationLayer .textWidgetAnnotation textarea:required,\n.annotationLayer .choiceWidgetAnnotation select:required,\n.annotationLayer .buttonWidgetAnnotation.checkBox input:required,\n.annotationLayer .buttonWidgetAnnotation.radioButton input:required {\n  outline: 1.5px solid red;\n}\n\n.annotationLayer .choiceWidgetAnnotation select option {\n  padding: 0;\n}\n\n.annotationLayer .buttonWidgetAnnotation.radioButton input {\n  border-radius: 50%;\n}\n\n.annotationLayer .textWidgetAnnotation textarea {\n  resize: none;\n}\n\n.annotationLayer .textWidgetAnnotation input[disabled],\n.annotationLayer .textWidgetAnnotation textarea[disabled],\n.annotationLayer .choiceWidgetAnnotation select[disabled],\n.annotationLayer .buttonWidgetAnnotation.checkBox input[disabled],\n.annotationLayer .buttonWidgetAnnotation.radioButton input[disabled] {\n  background: none;\n  border: 1px solid transparent;\n  cursor: not-allowed;\n}\n\n.annotationLayer .textWidgetAnnotation input:hover,\n.annotationLayer .textWidgetAnnotation textarea:hover,\n.annotationLayer .choiceWidgetAnnotation select:hover,\n.annotationLayer .buttonWidgetAnnotation.checkBox input:hover,\n.annotationLayer .buttonWidgetAnnotation.radioButton input:hover {\n  border: 1px solid rgba(0, 0, 0, 1);\n}\n\n.annotationLayer .textWidgetAnnotation input:focus,\n.annotationLayer .textWidgetAnnotation textarea:focus,\n.annotationLayer .choiceWidgetAnnotation select:focus {\n  background: none;\n  border: 1px solid transparent;\n}\n\n.annotationLayer .textWidgetAnnotation input :focus,\n.annotationLayer .textWidgetAnnotation textarea :focus,\n.annotationLayer .choiceWidgetAnnotation select :focus,\n.annotationLayer .buttonWidgetAnnotation.checkBox :focus,\n.annotationLayer .buttonWidgetAnnotation.radioButton :focus {\n  background-image: none;\n  background-color: transparent;\n  outline: auto;\n}\n\n.annotationLayer .buttonWidgetAnnotation.checkBox input:checked:before,\n.annotationLayer .buttonWidgetAnnotation.checkBox input:checked:after,\n.annotationLayer .buttonWidgetAnnotation.radioButton input:checked:before {\n  background-color: CanvasText;\n  content: \"\";\n  display: block;\n  position: absolute;\n}\n\n.annotationLayer .buttonWidgetAnnotation.checkBox input:checked:before,\n.annotationLayer .buttonWidgetAnnotation.checkBox input:checked:after {\n  height: 80%;\n  left: 45%;\n  width: 1px;\n}\n\n.annotationLayer .buttonWidgetAnnotation.checkBox input:checked:before {\n  transform: rotate(45deg);\n}\n\n.annotationLayer .buttonWidgetAnnotation.checkBox input:checked:after {\n  transform: rotate(-45deg);\n}\n\n.annotationLayer .buttonWidgetAnnotation.radioButton input:checked:before {\n  border-radius: 50%;\n  height: 50%;\n  left: 30%;\n  top: 20%;\n  width: 50%;\n}\n\n.annotationLayer .textWidgetAnnotation input.comb {\n  font-family: monospace;\n  padding-left: 2px;\n  padding-right: 0;\n}\n\n.annotationLayer .textWidgetAnnotation input.comb:focus {\n  /*\n   * Letter spacing is placed on the right side of each character. Hence, the\n   * letter spacing of the last character may be placed outside the visible\n   * area, causing horizontal scrolling. We avoid this by extending the width\n   * when the element has focus and revert this when it loses focus.\n   */\n  width: 103%;\n}\n\n.annotationLayer .buttonWidgetAnnotation.checkBox input,\n.annotationLayer .buttonWidgetAnnotation.radioButton input {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n}\n\n.annotationLayer .popupTriggerArea {\n  height: 100%;\n  width: 100%;\n}\n\n.annotationLayer .popupWrapper {\n  position: absolute;\n  font-size: calc(9px * var(--scale-factor));\n  width: 100%;\n  min-width: calc(180px * var(--scale-factor));\n  pointer-events: none;\n}\n\n.annotationLayer .popup {\n  position: absolute;\n  max-width: calc(180px * var(--scale-factor));\n  background-color: rgba(255, 255, 153, 1);\n  box-shadow: 0 calc(2px * var(--scale-factor)) calc(5px * var(--scale-factor))\n    rgba(136, 136, 136, 1);\n  border-radius: calc(2px * var(--scale-factor));\n  padding: calc(6px * var(--scale-factor));\n  margin-left: calc(5px * var(--scale-factor));\n  cursor: pointer;\n  font: message-box;\n  white-space: normal;\n  word-wrap: break-word;\n  pointer-events: auto;\n}\n\n.annotationLayer .popup > * {\n  font-size: calc(9px * var(--scale-factor));\n}\n\n.annotationLayer .popup h1 {\n  display: inline-block;\n}\n\n.annotationLayer .popupDate {\n  display: inline-block;\n  margin-left: calc(5px * var(--scale-factor));\n}\n\n.annotationLayer .popupContent {\n  border-top: 1px solid rgba(51, 51, 51, 1);\n  margin-top: calc(2px * var(--scale-factor));\n  padding-top: calc(2px * var(--scale-factor));\n}\n\n.annotationLayer .richText > * {\n  white-space: pre-wrap;\n  font-size: calc(9px * var(--scale-factor));\n}\n\n.annotationLayer .highlightAnnotation,\n.annotationLayer .underlineAnnotation,\n.annotationLayer .squigglyAnnotation,\n.annotationLayer .strikeoutAnnotation,\n.annotationLayer .freeTextAnnotation,\n.annotationLayer .lineAnnotation svg line,\n.annotationLayer .squareAnnotation svg rect,\n.annotationLayer .circleAnnotation svg ellipse,\n.annotationLayer .polylineAnnotation svg polyline,\n.annotationLayer .polygonAnnotation svg polygon,\n.annotationLayer .caretAnnotation,\n.annotationLayer .inkAnnotation svg polyline,\n.annotationLayer .stampAnnotation,\n.annotationLayer .fileAttachmentAnnotation {\n  cursor: pointer;\n}\n\n.annotationLayer section svg {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n\n.annotationLayer .annotationTextContent {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  color: transparent;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          -ms-user-select: none;\n      user-select: none;\n  pointer-events: none;\n}\n\n.annotationLayer .annotationTextContent span {\n  width: 100%;\n  display: inline-block;\n}\n\n:root {\n  --xfa-unfocused-field-background: url(\"data:image/svg+xml;charset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13);'/></svg>\");\n}\n\n@media (forced-colors: active) {\n  .xfaLayer *:required {\n    outline: 1.5px solid selectedItem;\n  }\n}\n\n.xfaLayer .highlight {\n  margin: -1px;\n  padding: 1px;\n  background-color: rgba(239, 203, 237, 1);\n  border-radius: 4px;\n}\n\n.xfaLayer .highlight.appended {\n  position: initial;\n}\n\n.xfaLayer .highlight.begin {\n  border-radius: 4px 0 0 4px;\n}\n\n.xfaLayer .highlight.end {\n  border-radius: 0 4px 4px 0;\n}\n\n.xfaLayer .highlight.middle {\n  border-radius: 0;\n}\n\n.xfaLayer .highlight.selected {\n  background-color: rgba(203, 223, 203, 1);\n}\n\n.xfaLayer ::-moz-selection {\n  background: rgba(0, 0, 255, 1);\n}\n\n.xfaLayer ::selection {\n  background: rgba(0, 0, 255, 1);\n}\n\n.xfaPage {\n  overflow: hidden;\n  position: relative;\n}\n\n.xfaContentarea {\n  position: absolute;\n}\n\n.xfaPrintOnly {\n  display: none;\n}\n\n.xfaLayer {\n  position: absolute;\n  text-align: initial;\n  top: 0;\n  left: 0;\n  transform-origin: 0 0;\n  line-height: 1.2;\n}\n\n.xfaLayer * {\n  color: inherit;\n  font: inherit;\n  font-style: inherit;\n  font-weight: inherit;\n  -webkit-font-kerning: inherit;\n          font-kerning: inherit;\n  letter-spacing: -0.01px;\n  text-align: inherit;\n  text-decoration: inherit;\n  box-sizing: border-box;\n  background-color: transparent;\n  padding: 0;\n  margin: 0;\n  pointer-events: auto;\n  line-height: inherit;\n}\n\n.xfaLayer *:required {\n  outline: 1.5px solid red;\n}\n\n.xfaLayer div {\n  pointer-events: none;\n}\n\n.xfaLayer svg {\n  pointer-events: none;\n}\n\n.xfaLayer svg * {\n  pointer-events: none;\n}\n\n.xfaLayer a {\n  color: blue;\n}\n\n.xfaRich li {\n  margin-left: 3em;\n}\n\n.xfaFont {\n  color: black;\n  font-weight: normal;\n  -webkit-font-kerning: none;\n          font-kerning: none;\n  font-size: 10px;\n  font-style: normal;\n  letter-spacing: 0;\n  text-decoration: none;\n  vertical-align: 0;\n}\n\n.xfaCaption {\n  overflow: hidden;\n  flex: 0 0 auto;\n}\n\n.xfaCaptionForCheckButton {\n  overflow: hidden;\n  flex: 1 1 auto;\n}\n\n.xfaLabel {\n  height: 100%;\n  width: 100%;\n}\n\n.xfaLeft {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n\n.xfaRight {\n  display: flex;\n  flex-direction: row-reverse;\n  align-items: center;\n}\n\n.xfaLeft > .xfaCaption,\n.xfaLeft > .xfaCaptionForCheckButton,\n.xfaRight > .xfaCaption,\n.xfaRight > .xfaCaptionForCheckButton {\n  max-height: 100%;\n}\n\n.xfaTop {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n\n.xfaBottom {\n  display: flex;\n  flex-direction: column-reverse;\n  align-items: flex-start;\n}\n\n.xfaTop > .xfaCaption,\n.xfaTop > .xfaCaptionForCheckButton,\n.xfaBottom > .xfaCaption,\n.xfaBottom > .xfaCaptionForCheckButton {\n  width: 100%;\n}\n\n.xfaBorder {\n  background-color: transparent;\n  position: absolute;\n  pointer-events: none;\n}\n\n.xfaWrapped {\n  width: 100%;\n  height: 100%;\n}\n\n.xfaTextfield:focus,\n.xfaSelect:focus {\n  background-image: none;\n  background-color: transparent;\n  outline: auto;\n  outline-offset: -1px;\n}\n\n.xfaCheckbox:focus,\n.xfaRadio:focus {\n  outline: auto;\n}\n\n.xfaTextfield,\n.xfaSelect {\n  height: 100%;\n  width: 100%;\n  flex: 1 1 auto;\n  border: none;\n  resize: none;\n  background-image: var(--xfa-unfocused-field-background);\n}\n\n.xfaTop > .xfaTextfield,\n.xfaTop > .xfaSelect,\n.xfaBottom > .xfaTextfield,\n.xfaBottom > .xfaSelect {\n  flex: 0 1 auto;\n}\n\n.xfaButton {\n  cursor: pointer;\n  width: 100%;\n  height: 100%;\n  border: none;\n  text-align: center;\n}\n\n.xfaLink {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.xfaCheckbox,\n.xfaRadio {\n  width: 100%;\n  height: 100%;\n  flex: 0 0 auto;\n  border: none;\n}\n\n.xfaRich {\n  white-space: pre-wrap;\n  width: 100%;\n  height: 100%;\n}\n\n.xfaImage {\n  -o-object-position: left top;\n     object-position: left top;\n  -o-object-fit: contain;\n     object-fit: contain;\n  width: 100%;\n  height: 100%;\n}\n\n.xfaLrTb,\n.xfaRlTb,\n.xfaTb {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n}\n\n.xfaLr {\n  display: flex;\n  flex-direction: row;\n  align-items: stretch;\n}\n\n.xfaRl {\n  display: flex;\n  flex-direction: row-reverse;\n  align-items: stretch;\n}\n\n.xfaTb > div {\n  justify-content: left;\n}\n\n.xfaPosition {\n  position: relative;\n}\n\n.xfaArea {\n  position: relative;\n}\n\n.xfaValignMiddle {\n  display: flex;\n  align-items: center;\n}\n\n.xfaTable {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n}\n\n.xfaTable .xfaRow {\n  display: flex;\n  flex-direction: row;\n  align-items: stretch;\n}\n\n.xfaTable .xfaRlRow {\n  display: flex;\n  flex-direction: row-reverse;\n  align-items: stretch;\n  flex: 1;\n}\n\n.xfaTable .xfaRlRow > div {\n  flex: 1;\n}\n\n.xfaNonInteractive input,\n.xfaNonInteractive textarea,\n.xfaDisabled input,\n.xfaDisabled textarea,\n.xfaReadOnly input,\n.xfaReadOnly textarea {\n  background: initial;\n}\n\n@media print {\n  .xfaTextfield,\n  .xfaSelect {\n    background: transparent;\n  }\n\n  .xfaSelect {\n    -webkit-appearance: none;\n       -moz-appearance: none;\n            appearance: none;\n    text-indent: 1px;\n    text-overflow: \"\";\n  }\n}\n\n:root {\n  --focus-outline: solid 2px blue;\n  --hover-outline: dashed 2px blue;\n  --freetext-line-height: 1.35;\n  --freetext-padding: 2px;\n  --editorInk-editing-cursor: pointer;\n}\n\n@media (forced-colors: active) {\n  :root {\n    --focus-outline: solid 3px ButtonText;\n    --hover-outline: dashed 3px ButtonText;\n  }\n}\n\n[data-editor-rotation=\"90\"] {\n  transform: rotate(90deg);\n}\n\n[data-editor-rotation=\"180\"] {\n  transform: rotate(180deg);\n}\n\n[data-editor-rotation=\"270\"] {\n  transform: rotate(270deg);\n}\n\n.annotationEditorLayer {\n  background: transparent;\n  position: absolute;\n  top: 0;\n  left: 0;\n  font-size: calc(100px * var(--scale-factor));\n  transform-origin: 0 0;\n}\n\n.annotationEditorLayer .selectedEditor {\n  outline: var(--focus-outline);\n  resize: none;\n}\n\n.annotationEditorLayer .freeTextEditor {\n  position: absolute;\n  background: transparent;\n  border-radius: 3px;\n  padding: calc(var(--freetext-padding) * var(--scale-factor));\n  resize: none;\n  width: auto;\n  height: auto;\n  z-index: 1;\n  transform-origin: 0 0;\n  touch-action: none;\n}\n\n.annotationEditorLayer .freeTextEditor .internal {\n  background: transparent;\n  border: none;\n  top: 0;\n  left: 0;\n  overflow: visible;\n  white-space: nowrap;\n  resize: none;\n  font: 10px sans-serif;\n  line-height: var(--freetext-line-height);\n}\n\n.annotationEditorLayer .freeTextEditor .overlay {\n  position: absolute;\n  display: none;\n  background: transparent;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.annotationEditorLayer .freeTextEditor .overlay.enabled {\n  display: block;\n}\n\n.annotationEditorLayer .freeTextEditor .internal:empty::before {\n  content: attr(default-content);\n  color: gray;\n}\n\n.annotationEditorLayer .freeTextEditor .internal:focus {\n  outline: none;\n}\n\n.annotationEditorLayer .inkEditor.disabled {\n  resize: none;\n}\n\n.annotationEditorLayer .inkEditor.disabled.selectedEditor {\n  resize: horizontal;\n}\n\n.annotationEditorLayer .freeTextEditor:hover:not(.selectedEditor),\n.annotationEditorLayer .inkEditor:hover:not(.selectedEditor) {\n  outline: var(--hover-outline);\n}\n\n.annotationEditorLayer .inkEditor {\n  position: absolute;\n  background: transparent;\n  border-radius: 3px;\n  overflow: auto;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  transform-origin: 0 0;\n  cursor: auto;\n}\n\n.annotationEditorLayer .inkEditor.editing {\n  resize: none;\n  cursor: var(--editorInk-editing-cursor), pointer;\n}\n\n.annotationEditorLayer .inkEditor .inkEditorCanvas {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  touch-action: none;\n}\n\n:root {\n  --viewer-container-height: 0;\n  --pdfViewer-padding-bottom: 0;\n  --page-margin: 1px auto -8px;\n  --page-border: 9px solid transparent;\n  --page-border-image: url('shadow.png') 9 9 repeat;\n  --spreadHorizontalWrapped-margin-LR: -3.5px;\n  --scale-factor: 1;\n}\n\n@media screen and (forced-colors: active) {\n  :root {\n    --pdfViewer-padding-bottom: 9px;\n    --page-margin: 8px auto -1px;\n    --page-border: 1px solid CanvasText;\n    --page-border-image: none;\n    --spreadHorizontalWrapped-margin-LR: 3.5px;\n  }\n}\n\n[data-main-rotation=\"90\"] {\n  transform: rotate(90deg) translateY(-100%);\n}\n\n[data-main-rotation=\"180\"] {\n  transform: rotate(180deg) translate(-100%, -100%);\n}\n\n[data-main-rotation=\"270\"] {\n  transform: rotate(270deg) translateX(-100%);\n}\n\n.pdfViewer {\n  padding-bottom: var(--pdfViewer-padding-bottom);\n}\n\n.pdfViewer .canvasWrapper {\n  overflow: hidden;\n}\n\n.pdfViewer .page {\n  direction: ltr;\n  width: 816px;\n  height: 1056px;\n  margin: var(--page-margin);\n  position: relative;\n  overflow: visible;\n  border: var(--page-border);\n  -o-border-image: var(--page-border-image);\n     border-image: var(--page-border-image);\n  background-clip: content-box;\n  background-color: rgba(255, 255, 255, 1);\n}\n\n.pdfViewer .dummyPage {\n  position: relative;\n  width: 0;\n  height: var(--viewer-container-height);\n}\n\n.pdfViewer.removePageBorders .page {\n  margin: 0 auto 10px;\n  border: none;\n}\n\n.pdfViewer.singlePageView {\n  display: inline-block;\n}\n\n.pdfViewer.singlePageView .page {\n  margin: 0;\n  border: none;\n}\n\n.pdfViewer.scrollHorizontal,\n.pdfViewer.scrollWrapped,\n.spread {\n  margin-left: 3.5px;\n  margin-right: 3.5px;\n  text-align: center;\n}\n\n.pdfViewer.scrollHorizontal,\n.spread {\n  white-space: nowrap;\n}\n\n.pdfViewer.removePageBorders,\n.pdfViewer.scrollHorizontal .spread,\n.pdfViewer.scrollWrapped .spread {\n  margin-left: 0;\n  margin-right: 0;\n}\n\n.spread .page,\n.spread .dummyPage,\n.pdfViewer.scrollHorizontal .page,\n.pdfViewer.scrollWrapped .page,\n.pdfViewer.scrollHorizontal .spread,\n.pdfViewer.scrollWrapped .spread {\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.spread .page,\n.pdfViewer.scrollHorizontal .page,\n.pdfViewer.scrollWrapped .page {\n  margin-left: var(--spreadHorizontalWrapped-margin-LR);\n  margin-right: var(--spreadHorizontalWrapped-margin-LR);\n}\n\n.pdfViewer.removePageBorders .spread .page,\n.pdfViewer.removePageBorders.scrollHorizontal .page,\n.pdfViewer.removePageBorders.scrollWrapped .page {\n  margin-left: 5px;\n  margin-right: 5px;\n}\n\n.pdfViewer .page canvas {\n  margin: 0;\n  display: block;\n}\n\n.pdfViewer .page canvas[hidden] {\n  display: none;\n}\n\n.pdfViewer .page .loadingIcon {\n  position: absolute;\n  display: block;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  background: url('loading-icon.gif') center no-repeat;\n}\n\n.pdfViewer .page .loadingIcon.notVisible {\n  background: none;\n}\n\n.pdfViewer.enablePermissions .textLayer span {\n  -webkit-user-select: none !important;\n     -moz-user-select: none !important;\n          -ms-user-select: none !important;\n      user-select: none !important;\n  cursor: not-allowed;\n}\n\n.pdfPresentationMode .pdfViewer {\n  padding-bottom: 0;\n}\n\n.pdfPresentationMode .spread {\n  margin: 0;\n}\n\n.pdfPresentationMode .pdfViewer .page {\n  margin: 0 auto;\n  border: 2px solid transparent;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvd2ViL3BkZl92aWV3ZXIuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7O0VBYUU7O0FBRUY7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLE9BQU87RUFDUCxNQUFNO0VBQ04sUUFBUTtFQUNSLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGNBQWM7RUFDZCw4QkFBOEI7S0FDM0IsMkJBQTJCO1VBQ3RCLDBCQUFzQjtNQUF0QixzQkFBc0I7RUFDOUIseUJBQXlCO0FBQzNCOztBQUVBOztFQUVFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWix1QkFBdUI7QUFDekI7O0FBRUE7MkRBQzJEOztBQUMzRDtFQUNFLE1BQU07RUFDTixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLHNDQUFzQztFQUN0QyxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUEsb0VBQW9FOztBQUNwRTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFDQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsT0FBTztFQUNQLFNBQVM7RUFDVCxRQUFRO0VBQ1IsU0FBUztFQUNULFdBQVc7RUFDWCxlQUFlO0VBQ2YseUJBQXlCO0tBQ3RCLHNCQUFzQjtVQUNqQixxQkFBaUI7TUFBakIsaUJBQWlCO0FBQzNCOztBQUVBO0VBQ0UsTUFBTTtBQUNSOztBQUdBO0VBQ0UsK05BQStOO0FBQ2pPOztBQUVBO0VBQ0U7Ozs7O0lBS0UsaUNBQWlD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O0FBQy9CIiwiZmlsZSI6InNyYy9hc3NldHMvd2ViL3BkZl92aWV3ZXIuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQ29weXJpZ2h0IDIwMTQgTW96aWxsYSBGb3VuZGF0aW9uXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi50ZXh0TGF5ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRleHQtYWxpZ246IGluaXRpYWw7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgb3BhY2l0eTogMC4yO1xuICBsaW5lLWhlaWdodDogMTtcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiBub25lO1xuICAgICAtbW96LXRleHQtc2l6ZS1hZGp1c3Q6IG5vbmU7XG4gICAgICAgICAgdGV4dC1zaXplLWFkanVzdDogbm9uZTtcbiAgZm9yY2VkLWNvbG9yLWFkanVzdDogbm9uZTtcbn1cblxuLnRleHRMYXllciBzcGFuLFxuLnRleHRMYXllciBiciB7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aGl0ZS1zcGFjZTogcHJlO1xuICBjdXJzb3I6IHRleHQ7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDAlIDAlO1xufVxuXG4vKiBPbmx5IG5lY2Vzc2FyeSBpbiBHb29nbGUgQ2hyb21lLCBzZWUgaXNzdWUgMTQyMDUsIGFuZCBtb3N0IHVuZm9ydHVuYXRlbHlcbiAqIHRoZSBwcm9ibGVtIGRvZXNuJ3Qgc2hvdyB1cCBpbiBcInRleHRcIiByZWZlcmVuY2UgdGVzdHMuICovXG4udGV4dExheWVyIHNwYW4ubWFya2VkQ29udGVudCB7XG4gIHRvcDogMDtcbiAgaGVpZ2h0OiAwO1xufVxuXG4udGV4dExheWVyIC5oaWdobGlnaHQge1xuICBtYXJnaW46IC0xcHg7XG4gIHBhZGRpbmc6IDFweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxODAsIDAsIDE3MCwgMSk7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLnRleHRMYXllciAuaGlnaGxpZ2h0LmFwcGVuZGVkIHtcbiAgcG9zaXRpb246IGluaXRpYWw7XG59XG5cbi50ZXh0TGF5ZXIgLmhpZ2hsaWdodC5iZWdpbiB7XG4gIGJvcmRlci1yYWRpdXM6IDRweCAwIDAgNHB4O1xufVxuXG4udGV4dExheWVyIC5oaWdobGlnaHQuZW5kIHtcbiAgYm9yZGVyLXJhZGl1czogMCA0cHggNHB4IDA7XG59XG5cbi50ZXh0TGF5ZXIgLmhpZ2hsaWdodC5taWRkbGUge1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuXG4udGV4dExheWVyIC5oaWdobGlnaHQuc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDEwMCwgMCwgMSk7XG59XG5cbi50ZXh0TGF5ZXIgOjotbW96LXNlbGVjdGlvbiB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMjU1LCAxKTtcbn1cblxuLnRleHRMYXllciA6OnNlbGVjdGlvbiB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMjU1LCAxKTtcbn1cblxuLyogQXZvaWRzIGh0dHBzOi8vZ2l0aHViLmNvbS9tb3ppbGxhL3BkZi5qcy9pc3N1ZXMvMTM4NDAgaW4gQ2hyb21lICovXG4udGV4dExheWVyIGJyOjotbW96LXNlbGVjdGlvbiB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuLnRleHRMYXllciBicjo6c2VsZWN0aW9uIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi50ZXh0TGF5ZXIgLmVuZE9mQ29udGVudCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMTAwJTtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgei1pbmRleDogLTE7XG4gIGN1cnNvcjogZGVmYXVsdDtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLnRleHRMYXllciAuZW5kT2ZDb250ZW50LmFjdGl2ZSB7XG4gIHRvcDogMDtcbn1cblxuXG46cm9vdCB7XG4gIC0tYW5ub3RhdGlvbi11bmZvY3VzZWQtZmllbGQtYmFja2dyb3VuZDogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9VVRGLTgsPHN2ZyB3aWR0aD0nMXB4JyBoZWlnaHQ9JzFweCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBzdHlsZT0nZmlsbDpyZ2JhKDAsIDU0LCAyNTUsIDAuMTMpOycvPjwvc3ZnPlwiKTtcbn1cblxuQG1lZGlhIChmb3JjZWQtY29sb3JzOiBhY3RpdmUpIHtcbiAgLmFubm90YXRpb25MYXllciAudGV4dFdpZGdldEFubm90YXRpb24gaW5wdXQ6cmVxdWlyZWQsXG4gIC5hbm5vdGF0aW9uTGF5ZXIgLnRleHRXaWRnZXRBbm5vdGF0aW9uIHRleHRhcmVhOnJlcXVpcmVkLFxuICAuYW5ub3RhdGlvbkxheWVyIC5jaG9pY2VXaWRnZXRBbm5vdGF0aW9uIHNlbGVjdDpyZXF1aXJlZCxcbiAgLmFubm90YXRpb25MYXllciAuYnV0dG9uV2lkZ2V0QW5ub3RhdGlvbi5jaGVja0JveCBpbnB1dDpyZXF1aXJlZCxcbiAgLmFubm90YXRpb25MYXllciAuYnV0dG9uV2lkZ2V0QW5ub3RhdGlvbi5yYWRpb0J1dHRvbiBpbnB1dDpyZXF1aXJlZCB7XG4gICAgb3V0bGluZTogMS41cHggc29saWQgc2VsZWN0ZWRJdGVtO1xuICB9XG59XG5cbi5hbm5vdGF0aW9uTGF5ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcbn1cblxuLmFubm90YXRpb25MYXllciBzZWN0aW9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0ZXh0LWFsaWduOiBpbml0aWFsO1xuICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xufVxuXG4uYW5ub3RhdGlvbkxheWVyIC5saW5rQW5ub3RhdGlvbiA+IGEsXG4uYW5ub3RhdGlvbkxheWVyIC5idXR0b25XaWRnZXRBbm5vdGF0aW9uLnB1c2hCdXR0b24gPiBhIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmb250LXNpemU6IDFlbTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uYW5ub3RhdGlvbkxheWVyIC5idXR0b25XaWRnZXRBbm5vdGF0aW9uLnB1c2hCdXR0b24gPiBjYW52YXMge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uYW5ub3RhdGlvbkxheWVyIC5saW5rQW5ub3RhdGlvbiA+IGE6aG92ZXIsXG4uYW5ub3RhdGlvbkxheWVyIC5idXR0b25XaWRnZXRBbm5vdGF0aW9uLnB1c2hCdXR0b24gPiBhOmhvdmVyIHtcbiAgb3BhY2l0eTogMC4yO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAwLCAxKTtcbiAgYm94LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDI1NSwgMjU1LCAwLCAxKTtcbn1cblxuLmFubm90YXRpb25MYXllciAudGV4dEFubm90YXRpb24gaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5hbm5vdGF0aW9uTGF5ZXIgLnRleHRXaWRnZXRBbm5vdGF0aW9uIGlucHV0LFxuLmFubm90YXRpb25MYXllciAudGV4dFdpZGdldEFubm90YXRpb24gdGV4dGFyZWEsXG4uYW5ub3RhdGlvbkxheWVyIC5jaG9pY2VXaWRnZXRBbm5vdGF0aW9uIHNlbGVjdCxcbi5hbm5vdGF0aW9uTGF5ZXIgLmJ1dHRvbldpZGdldEFubm90YXRpb24uY2hlY2tCb3ggaW5wdXQsXG4uYW5ub3RhdGlvbkxheWVyIC5idXR0b25XaWRnZXRBbm5vdGF0aW9uLnJhZGlvQnV0dG9uIGlucHV0IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdmFyKC0tYW5ub3RhdGlvbi11bmZvY3VzZWQtZmllbGQtYmFja2dyb3VuZCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmb250OiBjYWxjKDlweCAqIHZhcigtLXNjYWxlLWZhY3RvcikpIHNhbnMtc2VyaWY7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiAwO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmFubm90YXRpb25MYXllciAudGV4dFdpZGdldEFubm90YXRpb24gaW5wdXQ6cmVxdWlyZWQsXG4uYW5ub3RhdGlvbkxheWVyIC50ZXh0V2lkZ2V0QW5ub3RhdGlvbiB0ZXh0YXJlYTpyZXF1aXJlZCxcbi5hbm5vdGF0aW9uTGF5ZXIgLmNob2ljZVdpZGdldEFubm90YXRpb24gc2VsZWN0OnJlcXVpcmVkLFxuLmFubm90YXRpb25MYXllciAuYnV0dG9uV2lkZ2V0QW5ub3RhdGlvbi5jaGVja0JveCBpbnB1dDpyZXF1aXJlZCxcbi5hbm5vdGF0aW9uTGF5ZXIgLmJ1dHRvbldpZGdldEFubm90YXRpb24ucmFkaW9CdXR0b24gaW5wdXQ6cmVxdWlyZWQge1xuICBvdXRsaW5lOiAxLjVweCBzb2xpZCByZWQ7XG59XG5cbi5hbm5vdGF0aW9uTGF5ZXIgLmNob2ljZVdpZGdldEFubm90YXRpb24gc2VsZWN0IG9wdGlvbiB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5hbm5vdGF0aW9uTGF5ZXIgLmJ1dHRvbldpZGdldEFubm90YXRpb24ucmFkaW9CdXR0b24gaW5wdXQge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5hbm5vdGF0aW9uTGF5ZXIgLnRleHRXaWRnZXRBbm5vdGF0aW9uIHRleHRhcmVhIHtcbiAgcmVzaXplOiBub25lO1xufVxuXG4uYW5ub3RhdGlvbkxheWVyIC50ZXh0V2lkZ2V0QW5ub3RhdGlvbiBpbnB1dFtkaXNhYmxlZF0sXG4uYW5ub3RhdGlvbkxheWVyIC50ZXh0V2lkZ2V0QW5ub3RhdGlvbiB0ZXh0YXJlYVtkaXNhYmxlZF0sXG4uYW5ub3RhdGlvbkxheWVyIC5jaG9pY2VXaWRnZXRBbm5vdGF0aW9uIHNlbGVjdFtkaXNhYmxlZF0sXG4uYW5ub3RhdGlvbkxheWVyIC5idXR0b25XaWRnZXRBbm5vdGF0aW9uLmNoZWNrQm94IGlucHV0W2Rpc2FibGVkXSxcbi5hbm5vdGF0aW9uTGF5ZXIgLmJ1dHRvbldpZGdldEFubm90YXRpb24ucmFkaW9CdXR0b24gaW5wdXRbZGlzYWJsZWRdIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5cbi5hbm5vdGF0aW9uTGF5ZXIgLnRleHRXaWRnZXRBbm5vdGF0aW9uIGlucHV0OmhvdmVyLFxuLmFubm90YXRpb25MYXllciAudGV4dFdpZGdldEFubm90YXRpb24gdGV4dGFyZWE6aG92ZXIsXG4uYW5ub3RhdGlvbkxheWVyIC5jaG9pY2VXaWRnZXRBbm5vdGF0aW9uIHNlbGVjdDpob3Zlcixcbi5hbm5vdGF0aW9uTGF5ZXIgLmJ1dHRvbldpZGdldEFubm90YXRpb24uY2hlY2tCb3ggaW5wdXQ6aG92ZXIsXG4uYW5ub3RhdGlvbkxheWVyIC5idXR0b25XaWRnZXRBbm5vdGF0aW9uLnJhZGlvQnV0dG9uIGlucHV0OmhvdmVyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAxKTtcbn1cblxuLmFubm90YXRpb25MYXllciAudGV4dFdpZGdldEFubm90YXRpb24gaW5wdXQ6Zm9jdXMsXG4uYW5ub3RhdGlvbkxheWVyIC50ZXh0V2lkZ2V0QW5ub3RhdGlvbiB0ZXh0YXJlYTpmb2N1cyxcbi5hbm5vdGF0aW9uTGF5ZXIgLmNob2ljZVdpZGdldEFubm90YXRpb24gc2VsZWN0OmZvY3VzIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG59XG5cbi5hbm5vdGF0aW9uTGF5ZXIgLnRleHRXaWRnZXRBbm5vdGF0aW9uIGlucHV0IDpmb2N1cyxcbi5hbm5vdGF0aW9uTGF5ZXIgLnRleHRXaWRnZXRBbm5vdGF0aW9uIHRleHRhcmVhIDpmb2N1cyxcbi5hbm5vdGF0aW9uTGF5ZXIgLmNob2ljZVdpZGdldEFubm90YXRpb24gc2VsZWN0IDpmb2N1cyxcbi5hbm5vdGF0aW9uTGF5ZXIgLmJ1dHRvbldpZGdldEFubm90YXRpb24uY2hlY2tCb3ggOmZvY3VzLFxuLmFubm90YXRpb25MYXllciAuYnV0dG9uV2lkZ2V0QW5ub3RhdGlvbi5yYWRpb0J1dHRvbiA6Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgb3V0bGluZTogYXV0bztcbn1cblxuLmFubm90YXRpb25MYXllciAuYnV0dG9uV2lkZ2V0QW5ub3RhdGlvbi5jaGVja0JveCBpbnB1dDpjaGVja2VkOmJlZm9yZSxcbi5hbm5vdGF0aW9uTGF5ZXIgLmJ1dHRvbldpZGdldEFubm90YXRpb24uY2hlY2tCb3ggaW5wdXQ6Y2hlY2tlZDphZnRlcixcbi5hbm5vdGF0aW9uTGF5ZXIgLmJ1dHRvbldpZGdldEFubm90YXRpb24ucmFkaW9CdXR0b24gaW5wdXQ6Y2hlY2tlZDpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBDYW52YXNUZXh0O1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uYW5ub3RhdGlvbkxheWVyIC5idXR0b25XaWRnZXRBbm5vdGF0aW9uLmNoZWNrQm94IGlucHV0OmNoZWNrZWQ6YmVmb3JlLFxuLmFubm90YXRpb25MYXllciAuYnV0dG9uV2lkZ2V0QW5ub3RhdGlvbi5jaGVja0JveCBpbnB1dDpjaGVja2VkOmFmdGVyIHtcbiAgaGVpZ2h0OiA4MCU7XG4gIGxlZnQ6IDQ1JTtcbiAgd2lkdGg6IDFweDtcbn1cblxuLmFubm90YXRpb25MYXllciAuYnV0dG9uV2lkZ2V0QW5ub3RhdGlvbi5jaGVja0JveCBpbnB1dDpjaGVja2VkOmJlZm9yZSB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbn1cblxuLmFubm90YXRpb25MYXllciAuYnV0dG9uV2lkZ2V0QW5ub3RhdGlvbi5jaGVja0JveCBpbnB1dDpjaGVja2VkOmFmdGVyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbn1cblxuLmFubm90YXRpb25MYXllciAuYnV0dG9uV2lkZ2V0QW5ub3RhdGlvbi5yYWRpb0J1dHRvbiBpbnB1dDpjaGVja2VkOmJlZm9yZSB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgaGVpZ2h0OiA1MCU7XG4gIGxlZnQ6IDMwJTtcbiAgdG9wOiAyMCU7XG4gIHdpZHRoOiA1MCU7XG59XG5cbi5hbm5vdGF0aW9uTGF5ZXIgLnRleHRXaWRnZXRBbm5vdGF0aW9uIGlucHV0LmNvbWIge1xuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xuICBwYWRkaW5nLWxlZnQ6IDJweDtcbiAgcGFkZGluZy1yaWdodDogMDtcbn1cblxuLmFubm90YXRpb25MYXllciAudGV4dFdpZGdldEFubm90YXRpb24gaW5wdXQuY29tYjpmb2N1cyB7XG4gIC8qXG4gICAqIExldHRlciBzcGFjaW5nIGlzIHBsYWNlZCBvbiB0aGUgcmlnaHQgc2lkZSBvZiBlYWNoIGNoYXJhY3Rlci4gSGVuY2UsIHRoZVxuICAgKiBsZXR0ZXIgc3BhY2luZyBvZiB0aGUgbGFzdCBjaGFyYWN0ZXIgbWF5IGJlIHBsYWNlZCBvdXRzaWRlIHRoZSB2aXNpYmxlXG4gICAqIGFyZWEsIGNhdXNpbmcgaG9yaXpvbnRhbCBzY3JvbGxpbmcuIFdlIGF2b2lkIHRoaXMgYnkgZXh0ZW5kaW5nIHRoZSB3aWR0aFxuICAgKiB3aGVuIHRoZSBlbGVtZW50IGhhcyBmb2N1cyBhbmQgcmV2ZXJ0IHRoaXMgd2hlbiBpdCBsb3NlcyBmb2N1cy5cbiAgICovXG4gIHdpZHRoOiAxMDMlO1xufVxuXG4uYW5ub3RhdGlvbkxheWVyIC5idXR0b25XaWRnZXRBbm5vdGF0aW9uLmNoZWNrQm94IGlucHV0LFxuLmFubm90YXRpb25MYXllciAuYnV0dG9uV2lkZ2V0QW5ub3RhdGlvbi5yYWRpb0J1dHRvbiBpbnB1dCB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgICAgIGFwcGVhcmFuY2U6IG5vbmU7XG59XG5cbi5hbm5vdGF0aW9uTGF5ZXIgLnBvcHVwVHJpZ2dlckFyZWEge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYW5ub3RhdGlvbkxheWVyIC5wb3B1cFdyYXBwZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtc2l6ZTogY2FsYyg5cHggKiB2YXIoLS1zY2FsZS1mYWN0b3IpKTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi13aWR0aDogY2FsYygxODBweCAqIHZhcigtLXNjYWxlLWZhY3RvcikpO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLmFubm90YXRpb25MYXllciAucG9wdXAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1heC13aWR0aDogY2FsYygxODBweCAqIHZhcigtLXNjYWxlLWZhY3RvcikpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAxNTMsIDEpO1xuICBib3gtc2hhZG93OiAwIGNhbGMoMnB4ICogdmFyKC0tc2NhbGUtZmFjdG9yKSkgY2FsYyg1cHggKiB2YXIoLS1zY2FsZS1mYWN0b3IpKVxuICAgIHJnYmEoMTM2LCAxMzYsIDEzNiwgMSk7XG4gIGJvcmRlci1yYWRpdXM6IGNhbGMoMnB4ICogdmFyKC0tc2NhbGUtZmFjdG9yKSk7XG4gIHBhZGRpbmc6IGNhbGMoNnB4ICogdmFyKC0tc2NhbGUtZmFjdG9yKSk7XG4gIG1hcmdpbi1sZWZ0OiBjYWxjKDVweCAqIHZhcigtLXNjYWxlLWZhY3RvcikpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQ6IG1lc3NhZ2UtYm94O1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xufVxuXG4uYW5ub3RhdGlvbkxheWVyIC5wb3B1cCA+ICoge1xuICBmb250LXNpemU6IGNhbGMoOXB4ICogdmFyKC0tc2NhbGUtZmFjdG9yKSk7XG59XG5cbi5hbm5vdGF0aW9uTGF5ZXIgLnBvcHVwIGgxIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uYW5ub3RhdGlvbkxheWVyIC5wb3B1cERhdGUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiBjYWxjKDVweCAqIHZhcigtLXNjYWxlLWZhY3RvcikpO1xufVxuXG4uYW5ub3RhdGlvbkxheWVyIC5wb3B1cENvbnRlbnQge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSg1MSwgNTEsIDUxLCAxKTtcbiAgbWFyZ2luLXRvcDogY2FsYygycHggKiB2YXIoLS1zY2FsZS1mYWN0b3IpKTtcbiAgcGFkZGluZy10b3A6IGNhbGMoMnB4ICogdmFyKC0tc2NhbGUtZmFjdG9yKSk7XG59XG5cbi5hbm5vdGF0aW9uTGF5ZXIgLnJpY2hUZXh0ID4gKiB7XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgZm9udC1zaXplOiBjYWxjKDlweCAqIHZhcigtLXNjYWxlLWZhY3RvcikpO1xufVxuXG4uYW5ub3RhdGlvbkxheWVyIC5oaWdobGlnaHRBbm5vdGF0aW9uLFxuLmFubm90YXRpb25MYXllciAudW5kZXJsaW5lQW5ub3RhdGlvbixcbi5hbm5vdGF0aW9uTGF5ZXIgLnNxdWlnZ2x5QW5ub3RhdGlvbixcbi5hbm5vdGF0aW9uTGF5ZXIgLnN0cmlrZW91dEFubm90YXRpb24sXG4uYW5ub3RhdGlvbkxheWVyIC5mcmVlVGV4dEFubm90YXRpb24sXG4uYW5ub3RhdGlvbkxheWVyIC5saW5lQW5ub3RhdGlvbiBzdmcgbGluZSxcbi5hbm5vdGF0aW9uTGF5ZXIgLnNxdWFyZUFubm90YXRpb24gc3ZnIHJlY3QsXG4uYW5ub3RhdGlvbkxheWVyIC5jaXJjbGVBbm5vdGF0aW9uIHN2ZyBlbGxpcHNlLFxuLmFubm90YXRpb25MYXllciAucG9seWxpbmVBbm5vdGF0aW9uIHN2ZyBwb2x5bGluZSxcbi5hbm5vdGF0aW9uTGF5ZXIgLnBvbHlnb25Bbm5vdGF0aW9uIHN2ZyBwb2x5Z29uLFxuLmFubm90YXRpb25MYXllciAuY2FyZXRBbm5vdGF0aW9uLFxuLmFubm90YXRpb25MYXllciAuaW5rQW5ub3RhdGlvbiBzdmcgcG9seWxpbmUsXG4uYW5ub3RhdGlvbkxheWVyIC5zdGFtcEFubm90YXRpb24sXG4uYW5ub3RhdGlvbkxheWVyIC5maWxlQXR0YWNobWVudEFubm90YXRpb24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5hbm5vdGF0aW9uTGF5ZXIgc2VjdGlvbiBzdmcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5hbm5vdGF0aW9uTGF5ZXIgLmFubm90YXRpb25UZXh0Q29udGVudCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb3BhY2l0eTogMDtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLmFubm90YXRpb25MYXllciAuYW5ub3RhdGlvblRleHRDb250ZW50IHNwYW4ge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG5cbjpyb290IHtcbiAgLS14ZmEtdW5mb2N1c2VkLWZpZWxkLWJhY2tncm91bmQ6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PVVURi04LDxzdmcgd2lkdGg9JzFweCcgaGVpZ2h0PScxcHgnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PHJlY3Qgd2lkdGg9JzEwMCUnIGhlaWdodD0nMTAwJScgc3R5bGU9J2ZpbGw6cmdiYSgwLCA1NCwgMjU1LCAwLjEzKTsnLz48L3N2Zz5cIik7XG59XG5cbkBtZWRpYSAoZm9yY2VkLWNvbG9yczogYWN0aXZlKSB7XG4gIC54ZmFMYXllciAqOnJlcXVpcmVkIHtcbiAgICBvdXRsaW5lOiAxLjVweCBzb2xpZCBzZWxlY3RlZEl0ZW07XG4gIH1cbn1cblxuLnhmYUxheWVyIC5oaWdobGlnaHQge1xuICBtYXJnaW46IC0xcHg7XG4gIHBhZGRpbmc6IDFweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzksIDIwMywgMjM3LCAxKTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4ueGZhTGF5ZXIgLmhpZ2hsaWdodC5hcHBlbmRlZCB7XG4gIHBvc2l0aW9uOiBpbml0aWFsO1xufVxuXG4ueGZhTGF5ZXIgLmhpZ2hsaWdodC5iZWdpbiB7XG4gIGJvcmRlci1yYWRpdXM6IDRweCAwIDAgNHB4O1xufVxuXG4ueGZhTGF5ZXIgLmhpZ2hsaWdodC5lbmQge1xuICBib3JkZXItcmFkaXVzOiAwIDRweCA0cHggMDtcbn1cblxuLnhmYUxheWVyIC5oaWdobGlnaHQubWlkZGxlIHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cblxuLnhmYUxheWVyIC5oaWdobGlnaHQuc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwMywgMjIzLCAyMDMsIDEpO1xufVxuXG4ueGZhTGF5ZXIgOjotbW96LXNlbGVjdGlvbiB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMjU1LCAxKTtcbn1cblxuLnhmYUxheWVyIDo6c2VsZWN0aW9uIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAyNTUsIDEpO1xufVxuXG4ueGZhUGFnZSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnhmYUNvbnRlbnRhcmVhIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4ueGZhUHJpbnRPbmx5IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnhmYUxheWVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0ZXh0LWFsaWduOiBpbml0aWFsO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbn1cblxuLnhmYUxheWVyICoge1xuICBjb2xvcjogaW5oZXJpdDtcbiAgZm9udDogaW5oZXJpdDtcbiAgZm9udC1zdHlsZTogaW5oZXJpdDtcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XG4gIGZvbnQta2VybmluZzogaW5oZXJpdDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjAxcHg7XG4gIHRleHQtYWxpZ246IGluaGVyaXQ7XG4gIHRleHQtZGVjb3JhdGlvbjogaW5oZXJpdDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xufVxuXG4ueGZhTGF5ZXIgKjpyZXF1aXJlZCB7XG4gIG91dGxpbmU6IDEuNXB4IHNvbGlkIHJlZDtcbn1cblxuLnhmYUxheWVyIGRpdiB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4ueGZhTGF5ZXIgc3ZnIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi54ZmFMYXllciBzdmcgKiB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4ueGZhTGF5ZXIgYSB7XG4gIGNvbG9yOiBibHVlO1xufVxuXG4ueGZhUmljaCBsaSB7XG4gIG1hcmdpbi1sZWZ0OiAzZW07XG59XG5cbi54ZmFGb250IHtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LWtlcm5pbmc6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB2ZXJ0aWNhbC1hbGlnbjogMDtcbn1cblxuLnhmYUNhcHRpb24ge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBmbGV4OiAwIDAgYXV0bztcbn1cblxuLnhmYUNhcHRpb25Gb3JDaGVja0J1dHRvbiB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuXG4ueGZhTGFiZWwge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ueGZhTGVmdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi54ZmFSaWdodCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnhmYUxlZnQgPiAueGZhQ2FwdGlvbixcbi54ZmFMZWZ0ID4gLnhmYUNhcHRpb25Gb3JDaGVja0J1dHRvbixcbi54ZmFSaWdodCA+IC54ZmFDYXB0aW9uLFxuLnhmYVJpZ2h0ID4gLnhmYUNhcHRpb25Gb3JDaGVja0J1dHRvbiB7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG59XG5cbi54ZmFUb3Age1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cblxuLnhmYUJvdHRvbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG5cbi54ZmFUb3AgPiAueGZhQ2FwdGlvbixcbi54ZmFUb3AgPiAueGZhQ2FwdGlvbkZvckNoZWNrQnV0dG9uLFxuLnhmYUJvdHRvbSA+IC54ZmFDYXB0aW9uLFxuLnhmYUJvdHRvbSA+IC54ZmFDYXB0aW9uRm9yQ2hlY2tCdXR0b24ge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnhmYUJvcmRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4ueGZhV3JhcHBlZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi54ZmFUZXh0ZmllbGQ6Zm9jdXMsXG4ueGZhU2VsZWN0OmZvY3VzIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIG91dGxpbmU6IGF1dG87XG4gIG91dGxpbmUtb2Zmc2V0OiAtMXB4O1xufVxuXG4ueGZhQ2hlY2tib3g6Zm9jdXMsXG4ueGZhUmFkaW86Zm9jdXMge1xuICBvdXRsaW5lOiBhdXRvO1xufVxuXG4ueGZhVGV4dGZpZWxkLFxuLnhmYVNlbGVjdCB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsZXg6IDEgMSBhdXRvO1xuICBib3JkZXI6IG5vbmU7XG4gIHJlc2l6ZTogbm9uZTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdmFyKC0teGZhLXVuZm9jdXNlZC1maWVsZC1iYWNrZ3JvdW5kKTtcbn1cblxuLnhmYVRvcCA+IC54ZmFUZXh0ZmllbGQsXG4ueGZhVG9wID4gLnhmYVNlbGVjdCxcbi54ZmFCb3R0b20gPiAueGZhVGV4dGZpZWxkLFxuLnhmYUJvdHRvbSA+IC54ZmFTZWxlY3Qge1xuICBmbGV4OiAwIDEgYXV0bztcbn1cblxuLnhmYUJ1dHRvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyOiBub25lO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi54ZmFMaW5rIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG59XG5cbi54ZmFDaGVja2JveCxcbi54ZmFSYWRpbyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZsZXg6IDAgMCBhdXRvO1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi54ZmFSaWNoIHtcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ueGZhSW1hZ2Uge1xuICAtby1vYmplY3QtcG9zaXRpb246IGxlZnQgdG9wO1xuICAgICBvYmplY3QtcG9zaXRpb246IGxlZnQgdG9wO1xuICAtby1vYmplY3QtZml0OiBjb250YWluO1xuICAgICBvYmplY3QtZml0OiBjb250YWluO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ueGZhTHJUYixcbi54ZmFSbFRiLFxuLnhmYVRiIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG59XG5cbi54ZmFMciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xufVxuXG4ueGZhUmwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xufVxuXG4ueGZhVGIgPiBkaXYge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG59XG5cbi54ZmFQb3NpdGlvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnhmYUFyZWEge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi54ZmFWYWxpZ25NaWRkbGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ueGZhVGFibGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbn1cblxuLnhmYVRhYmxlIC54ZmFSb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbn1cblxuLnhmYVRhYmxlIC54ZmFSbFJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIGZsZXg6IDE7XG59XG5cbi54ZmFUYWJsZSAueGZhUmxSb3cgPiBkaXYge1xuICBmbGV4OiAxO1xufVxuXG4ueGZhTm9uSW50ZXJhY3RpdmUgaW5wdXQsXG4ueGZhTm9uSW50ZXJhY3RpdmUgdGV4dGFyZWEsXG4ueGZhRGlzYWJsZWQgaW5wdXQsXG4ueGZhRGlzYWJsZWQgdGV4dGFyZWEsXG4ueGZhUmVhZE9ubHkgaW5wdXQsXG4ueGZhUmVhZE9ubHkgdGV4dGFyZWEge1xuICBiYWNrZ3JvdW5kOiBpbml0aWFsO1xufVxuXG5AbWVkaWEgcHJpbnQge1xuICAueGZhVGV4dGZpZWxkLFxuICAueGZhU2VsZWN0IHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgfVxuXG4gIC54ZmFTZWxlY3Qge1xuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgICAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgIHRleHQtaW5kZW50OiAxcHg7XG4gICAgdGV4dC1vdmVyZmxvdzogXCJcIjtcbiAgfVxufVxuXG5cbjpyb290IHtcbiAgLS1mb2N1cy1vdXRsaW5lOiBzb2xpZCAycHggYmx1ZTtcbiAgLS1ob3Zlci1vdXRsaW5lOiBkYXNoZWQgMnB4IGJsdWU7XG4gIC0tZnJlZXRleHQtbGluZS1oZWlnaHQ6IDEuMzU7XG4gIC0tZnJlZXRleHQtcGFkZGluZzogMnB4O1xuICAtLWVkaXRvckluay1lZGl0aW5nLWN1cnNvcjogcG9pbnRlcjtcbn1cblxuQG1lZGlhIChmb3JjZWQtY29sb3JzOiBhY3RpdmUpIHtcbiAgOnJvb3Qge1xuICAgIC0tZm9jdXMtb3V0bGluZTogc29saWQgM3B4IEJ1dHRvblRleHQ7XG4gICAgLS1ob3Zlci1vdXRsaW5lOiBkYXNoZWQgM3B4IEJ1dHRvblRleHQ7XG4gIH1cbn1cblxuW2RhdGEtZWRpdG9yLXJvdGF0aW9uPVwiOTBcIl0ge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG59XG5bZGF0YS1lZGl0b3Itcm90YXRpb249XCIxODBcIl0ge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xufVxuW2RhdGEtZWRpdG9yLXJvdGF0aW9uPVwiMjcwXCJdIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcbn1cblxuLmFubm90YXRpb25FZGl0b3JMYXllciB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgZm9udC1zaXplOiBjYWxjKDEwMHB4ICogdmFyKC0tc2NhbGUtZmFjdG9yKSk7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcbn1cblxuLmFubm90YXRpb25FZGl0b3JMYXllciAuc2VsZWN0ZWRFZGl0b3Ige1xuICBvdXRsaW5lOiB2YXIoLS1mb2N1cy1vdXRsaW5lKTtcbiAgcmVzaXplOiBub25lO1xufVxuXG4uYW5ub3RhdGlvbkVkaXRvckxheWVyIC5mcmVlVGV4dEVkaXRvciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgcGFkZGluZzogY2FsYyh2YXIoLS1mcmVldGV4dC1wYWRkaW5nKSAqIHZhcigtLXNjYWxlLWZhY3RvcikpO1xuICByZXNpemU6IG5vbmU7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IGF1dG87XG4gIHotaW5kZXg6IDE7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcbiAgdG91Y2gtYWN0aW9uOiBub25lO1xufVxuXG4uYW5ub3RhdGlvbkVkaXRvckxheWVyIC5mcmVlVGV4dEVkaXRvciAuaW50ZXJuYWwge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICByZXNpemU6IG5vbmU7XG4gIGZvbnQ6IDEwcHggc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IHZhcigtLWZyZWV0ZXh0LWxpbmUtaGVpZ2h0KTtcbn1cblxuLmFubm90YXRpb25FZGl0b3JMYXllciAuZnJlZVRleHRFZGl0b3IgLm92ZXJsYXkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5hbm5vdGF0aW9uRWRpdG9yTGF5ZXIgLmZyZWVUZXh0RWRpdG9yIC5vdmVybGF5LmVuYWJsZWQge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmFubm90YXRpb25FZGl0b3JMYXllciAuZnJlZVRleHRFZGl0b3IgLmludGVybmFsOmVtcHR5OjpiZWZvcmUge1xuICBjb250ZW50OiBhdHRyKGRlZmF1bHQtY29udGVudCk7XG4gIGNvbG9yOiBncmF5O1xufVxuXG4uYW5ub3RhdGlvbkVkaXRvckxheWVyIC5mcmVlVGV4dEVkaXRvciAuaW50ZXJuYWw6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uYW5ub3RhdGlvbkVkaXRvckxheWVyIC5pbmtFZGl0b3IuZGlzYWJsZWQge1xuICByZXNpemU6IG5vbmU7XG59XG5cbi5hbm5vdGF0aW9uRWRpdG9yTGF5ZXIgLmlua0VkaXRvci5kaXNhYmxlZC5zZWxlY3RlZEVkaXRvciB7XG4gIHJlc2l6ZTogaG9yaXpvbnRhbDtcbn1cblxuLmFubm90YXRpb25FZGl0b3JMYXllciAuZnJlZVRleHRFZGl0b3I6aG92ZXI6bm90KC5zZWxlY3RlZEVkaXRvciksXG4uYW5ub3RhdGlvbkVkaXRvckxheWVyIC5pbmtFZGl0b3I6aG92ZXI6bm90KC5zZWxlY3RlZEVkaXRvcikge1xuICBvdXRsaW5lOiB2YXIoLS1ob3Zlci1vdXRsaW5lKTtcbn1cblxuLmFubm90YXRpb25FZGl0b3JMYXllciAuaW5rRWRpdG9yIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBvdmVyZmxvdzogYXV0bztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgei1pbmRleDogMTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xuICBjdXJzb3I6IGF1dG87XG59XG5cbi5hbm5vdGF0aW9uRWRpdG9yTGF5ZXIgLmlua0VkaXRvci5lZGl0aW5nIHtcbiAgcmVzaXplOiBub25lO1xuICBjdXJzb3I6IHZhcigtLWVkaXRvckluay1lZGl0aW5nLWN1cnNvciksIHBvaW50ZXI7XG59XG5cbi5hbm5vdGF0aW9uRWRpdG9yTGF5ZXIgLmlua0VkaXRvciAuaW5rRWRpdG9yQ2FudmFzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRvdWNoLWFjdGlvbjogbm9uZTtcbn1cblxuOnJvb3Qge1xuICAtLXZpZXdlci1jb250YWluZXItaGVpZ2h0OiAwO1xuICAtLXBkZlZpZXdlci1wYWRkaW5nLWJvdHRvbTogMDtcbiAgLS1wYWdlLW1hcmdpbjogMXB4IGF1dG8gLThweDtcbiAgLS1wYWdlLWJvcmRlcjogOXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAtLXBhZ2UtYm9yZGVyLWltYWdlOiB1cmwoaW1hZ2VzL3NoYWRvdy5wbmcpIDkgOSByZXBlYXQ7XG4gIC0tc3ByZWFkSG9yaXpvbnRhbFdyYXBwZWQtbWFyZ2luLUxSOiAtMy41cHg7XG4gIC0tc2NhbGUtZmFjdG9yOiAxO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAoZm9yY2VkLWNvbG9yczogYWN0aXZlKSB7XG4gIDpyb290IHtcbiAgICAtLXBkZlZpZXdlci1wYWRkaW5nLWJvdHRvbTogOXB4O1xuICAgIC0tcGFnZS1tYXJnaW46IDhweCBhdXRvIC0xcHg7XG4gICAgLS1wYWdlLWJvcmRlcjogMXB4IHNvbGlkIENhbnZhc1RleHQ7XG4gICAgLS1wYWdlLWJvcmRlci1pbWFnZTogbm9uZTtcbiAgICAtLXNwcmVhZEhvcml6b250YWxXcmFwcGVkLW1hcmdpbi1MUjogMy41cHg7XG4gIH1cbn1cblxuW2RhdGEtbWFpbi1yb3RhdGlvbj1cIjkwXCJdIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpIHRyYW5zbGF0ZVkoLTEwMCUpO1xufVxuW2RhdGEtbWFpbi1yb3RhdGlvbj1cIjE4MFwiXSB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZykgdHJhbnNsYXRlKC0xMDAlLCAtMTAwJSk7XG59XG5bZGF0YS1tYWluLXJvdGF0aW9uPVwiMjcwXCJdIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKSB0cmFuc2xhdGVYKC0xMDAlKTtcbn1cblxuLnBkZlZpZXdlciB7XG4gIHBhZGRpbmctYm90dG9tOiB2YXIoLS1wZGZWaWV3ZXItcGFkZGluZy1ib3R0b20pO1xufVxuXG4ucGRmVmlld2VyIC5jYW52YXNXcmFwcGVyIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnBkZlZpZXdlciAucGFnZSB7XG4gIGRpcmVjdGlvbjogbHRyO1xuICB3aWR0aDogODE2cHg7XG4gIGhlaWdodDogMTA1NnB4O1xuICBtYXJnaW46IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgYm9yZGVyOiB2YXIoLS1wYWdlLWJvcmRlcik7XG4gIC1vLWJvcmRlci1pbWFnZTogdmFyKC0tcGFnZS1ib3JkZXItaW1hZ2UpO1xuICAgICBib3JkZXItaW1hZ2U6IHZhcigtLXBhZ2UtYm9yZGVyLWltYWdlKTtcbiAgYmFja2dyb3VuZC1jbGlwOiBjb250ZW50LWJveDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcbn1cblxuLnBkZlZpZXdlciAuZHVtbXlQYWdlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiB2YXIoLS12aWV3ZXItY29udGFpbmVyLWhlaWdodCk7XG59XG5cbi5wZGZWaWV3ZXIucmVtb3ZlUGFnZUJvcmRlcnMgLnBhZ2Uge1xuICBtYXJnaW46IDAgYXV0byAxMHB4O1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5wZGZWaWV3ZXIuc2luZ2xlUGFnZVZpZXcge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5wZGZWaWV3ZXIuc2luZ2xlUGFnZVZpZXcgLnBhZ2Uge1xuICBtYXJnaW46IDA7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLnBkZlZpZXdlci5zY3JvbGxIb3Jpem9udGFsLFxuLnBkZlZpZXdlci5zY3JvbGxXcmFwcGVkLFxuLnNwcmVhZCB7XG4gIG1hcmdpbi1sZWZ0OiAzLjVweDtcbiAgbWFyZ2luLXJpZ2h0OiAzLjVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucGRmVmlld2VyLnNjcm9sbEhvcml6b250YWwsXG4uc3ByZWFkIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLnBkZlZpZXdlci5yZW1vdmVQYWdlQm9yZGVycyxcbi5wZGZWaWV3ZXIuc2Nyb2xsSG9yaXpvbnRhbCAuc3ByZWFkLFxuLnBkZlZpZXdlci5zY3JvbGxXcmFwcGVkIC5zcHJlYWQge1xuICBtYXJnaW4tbGVmdDogMDtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xufVxuXG4uc3ByZWFkIC5wYWdlLFxuLnNwcmVhZCAuZHVtbXlQYWdlLFxuLnBkZlZpZXdlci5zY3JvbGxIb3Jpem9udGFsIC5wYWdlLFxuLnBkZlZpZXdlci5zY3JvbGxXcmFwcGVkIC5wYWdlLFxuLnBkZlZpZXdlci5zY3JvbGxIb3Jpem9udGFsIC5zcHJlYWQsXG4ucGRmVmlld2VyLnNjcm9sbFdyYXBwZWQgLnNwcmVhZCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLnNwcmVhZCAucGFnZSxcbi5wZGZWaWV3ZXIuc2Nyb2xsSG9yaXpvbnRhbCAucGFnZSxcbi5wZGZWaWV3ZXIuc2Nyb2xsV3JhcHBlZCAucGFnZSB7XG4gIG1hcmdpbi1sZWZ0OiB2YXIoLS1zcHJlYWRIb3Jpem9udGFsV3JhcHBlZC1tYXJnaW4tTFIpO1xuICBtYXJnaW4tcmlnaHQ6IHZhcigtLXNwcmVhZEhvcml6b250YWxXcmFwcGVkLW1hcmdpbi1MUik7XG59XG5cbi5wZGZWaWV3ZXIucmVtb3ZlUGFnZUJvcmRlcnMgLnNwcmVhZCAucGFnZSxcbi5wZGZWaWV3ZXIucmVtb3ZlUGFnZUJvcmRlcnMuc2Nyb2xsSG9yaXpvbnRhbCAucGFnZSxcbi5wZGZWaWV3ZXIucmVtb3ZlUGFnZUJvcmRlcnMuc2Nyb2xsV3JhcHBlZCAucGFnZSB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4ucGRmVmlld2VyIC5wYWdlIGNhbnZhcyB7XG4gIG1hcmdpbjogMDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5wZGZWaWV3ZXIgLnBhZ2UgY2FudmFzW2hpZGRlbl0ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ucGRmVmlld2VyIC5wYWdlIC5sb2FkaW5nSWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZDogdXJsKFwiaW1hZ2VzL2xvYWRpbmctaWNvbi5naWZcIikgY2VudGVyIG5vLXJlcGVhdDtcbn1cbi5wZGZWaWV3ZXIgLnBhZ2UgLmxvYWRpbmdJY29uLm5vdFZpc2libGUge1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuXG4ucGRmVmlld2VyLmVuYWJsZVBlcm1pc3Npb25zIC50ZXh0TGF5ZXIgc3BhbiB7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lICFpbXBvcnRhbnQ7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5cbi5wZGZQcmVzZW50YXRpb25Nb2RlIC5wZGZWaWV3ZXIge1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbn1cblxuLnBkZlByZXNlbnRhdGlvbk1vZGUgLnNwcmVhZCB7XG4gIG1hcmdpbjogMDtcbn1cblxuLnBkZlByZXNlbnRhdGlvbk1vZGUgLnBkZlZpZXdlciAucGFnZSB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cbiJdfQ== */", '', '']]

/***/ }),

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* You can add global styles to this file, and also import other style files */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUE4RSIsImZpbGUiOiJzcmMvc3R5bGVzLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbiJdfQ== */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./src/assets/web/pdf_viewer.css":
/*!***************************************!*\
  !*** ./src/assets/web/pdf_viewer.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../../../node_modules/postcss-loader/src??embedded!./pdf_viewer.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/assets/web/pdf_viewer.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!./styles.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ 3:
/*!**************************************************************!*\
  !*** multi ./src/styles.css ./src/assets/web/pdf_viewer.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/pratap/pdfproject/src/styles.css */"./src/styles.css");
module.exports = __webpack_require__(/*! /home/pratap/pdfproject/src/assets/web/pdf_viewer.css */"./src/assets/web/pdf_viewer.css");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles-es2015.js.map