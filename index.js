//bpmn filename
const bpmnFilePath = "Test.bpmn";

//BpmnJS configuration
const bpmnConfig = {
  container: document.getElementById("js-canvas"),
  height: 900,
};

//BpmnJS initialization
var viewer = new BpmnJS(bpmnConfig);

//file processing
fetch(bpmnFilePath)
  .then((response) => response.text())
  .then((data) => {
    const dataXML = data;
    viewer.importXML(dataXML);
    viewer.get("canvas").zoom("fit-viewport");
  });
