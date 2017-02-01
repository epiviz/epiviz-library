Epiviz
======

Epiviz is a scientific information visualization tool for genetic and epigenetic data, used to aid in the exploration and understanding of correlations between various genome features.

For more information, visit - http://epiviz.github.io/


To Compile closure
-------------------

```
java -jar compiler.jar 
    --js_output_file=bin/epiviz-compiled-jar.js 
    --js 'src/epiviz/**' 
    --js '!src/epiviz/default-settings.js' 
    --js '!src/epiviz/epivizr-settings.js' 
    --js '!src/epiviz/standalone-settings.js' 
    --js 'closure-library/closure/goog/base.js' 
    --entry_point=goog:epiviz.main
```