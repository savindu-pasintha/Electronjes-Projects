npm init
npm i --save node-gyp

create index.js
create binding.gyp

sudo npm install -g node-gyp --allow-root --unsafe-perm

node-gyp clear
node-gyp configure
node-gyp build

or 

node-gyp clean configure build
node index.js or node ./

ek file ekk method eki cpp eke
NODE_MODULE(addon,InitializeSum)

https://gyp.gsrc.io/docs/UserDocumentation.md
https://v8.dev/docs/build
https://www.youtube.com/watch?v=s2ssNOQDE0M
https://nodejs.org/api/addons.html#c-addons

{
    "targets" : [
        {
            "target_name" : "calculate",//target krn eke nm
            "source" :[ "calculate.cpp"],//api liyn cpp file
            "include_dirs" : ["<!node -e \ "require('nan')\")" ]
        }
    ]
}{
    "targets" : [
        {
            "target_name" : "testlib",
            "source" :[ "calculate.cpp","testlib.cpp"],
            "include_dirs" : ["<!node -e \ require('nan')\)" ]
        }
    ]
}



