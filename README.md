Epiviz
======

Epiviz is a scientific information visualization tool for genetic and epigenetic data, used to aid in the exploration and understanding of correlations between various genome features.

For more information, visit - http://epiviz.github.io/


To Install
----------

`npm install --save epiviz/epiviz-library`


Usage
----------

`var epiviz = require('epiviz');`



To Compile closure
-------------------

```
java -jar compiler.jar 
    --js_output_file=bin/epiviz.min.js 
    --js 'src/epiviz/**' 
    --js '!src/epiviz/default-settings.js' 
    --js '!src/epiviz/epivizr-settings.js' 
    --js '!src/epiviz/standalone-settings.js' 
    --js 'closure-library/closure/goog/base.js' 
    --entry_point=goog:epiviz.main
```

For development mode - 

```
java -jar compiler.jar 
    --compilation_level WHITESPACE_ONLY
    --js_output_file=bin/epiviz.js 
    --js 'src/epiviz/**' 
    --js '!src/epiviz/default-settings.js' 
    --js '!src/epiviz/epivizr-settings.js' 
    --js '!src/epiviz/standalone-settings.js' 
    --js 'closure-library/closure/goog/base.js' 
    --entry_point=goog:epiviz.main
```