const PDFMerger = require('pdf-merger-js');

var merger = new PDFMerger();

const mergePDFs = async (p1,p2,p3) => {
  await merger.add(p1); 
  await merger.add(p2);
  await merger.add(p3);
  let d = new Date().getTime()
  await merger.save(`public/${d}.pdf`);
  return d
};

module.exports = {mergePDFs}