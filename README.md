Atomic Mockup Library
=====================
> Yonas Sandbaek [@seltar](https://twitter.com/seltar), [github](https://github.com/seltar)
> https://github.com/yonas.sandbaek/AtomicMockupLibrary

###### Version
> 0.0.1

### What is this
This project aims to give structure and improve automation when working with atomic design.

### Commenting
Use markdown syntax in comments for nice formatted documentation
[Markdown syntax](http://daringfireball.net/projects/markdown/syntax)

### Starting up
- Clone the [repo](https://github.com/yonas.sandbaek/AtomicMockupLibrary.git) or unpack zip to a new folder
- Open up terminal and install dependencies with `[sudo] npm install`
- (not sure if needed) Install groc like this `[sudo] npm install -g groc`
- Run `grunt` to build and start watching
- Go forth and write your jargon, you little codemonkey!

### Configuration
- To change the folder configuration, edit `settings.yml`
- To change site details, edit `site.yml`


### Building
Here are the tasks you can use with grunt

- Clean folders and build html

        grunt build

- Lint and compile javascript

        grunt scripts 

- Generate SASS import for components and compile SASS

        grunt styles 

- Start watching for changes

        grunt automate 

- Build documentation

        grunt docs

- Start watching for changes and generate documentation

        grunt autodocs

- Clean folders, build html, compile javascript, compile sass, generate documentation and start watching for changes

        grunt



---

### Folder structure
    root
    │
    │   # settings and documentation
    │   README.md
    │   package.json
    │   Gruntfile.js
    │   site.yml
    │   settings.yml
    │   LICENSE-MIT
    │
    ├───assets
    │   │
    │   ├───css
    │   │   │   
    │   │   │   # compiled css
    │   │   │   main.css
    │   │   │   ...
    │   │   └─────────────────────────
    │   │
    │   ├───ico
    │   │   │
    │   │   │   # favicons, apple icons etc
    │   │   │   ...
    │   │   └─────────────────────────
    │   │
    │   ├───js
    │   │   │   
    │   │   │   # main scripts
    │   │   │   all.min.js
    │   │   │   config.js 
    │   │   │   main.js 
    │   │   │      
    │   │   └───vendor
    │   │       │   
    │   │       │   # third party javascript libraries
    │   │       │   jquery.js
    │   │       │   require.js
    │   │       │   
    │   │       └─────────────────────────
    │   │       
    │   └───sass
    │       │   
    │       │   # main sass architecture
    │       │   _components.scss
    │       │   _site.scss 
    │       │   main.scss 
    │       │   
    │       ├───core
    │       │   │
    │       │   │   # core sass library
    │       │   │   _breakpoints.scss
    │       │   │   _colors.scss
    │       │   │   _extends.scss
    │       │   │   _functions.scss
    │       │   │   _imgs.scss
    │       │   │   _layout.scss
    │       │   │   _mixins.scss
    │       │   │   _type.scss
    │       │   │   
    │       │   └─────────────────────────
    │       │      
    │       └───external
    │           │
    │           │   # external resources
    │           │   _normalize-3.0.1.scss
    │           │   
    │           └─────────────────────────
    │           
    ├───components
    │   │
    │   ├───_helpers
    │   │   │   
    │   │   │   # all .js files in this folder are included as handlebars helpers.
    │   │   │   atomic.js
    │   │   │   ...
    │   │   └─────────────────────────
    │   │
    │   ├───_layouts
    │   │   │
    │   │   │   # main layouts
    │   │   │   default.hbs
    │   │   │   ...
    │   │   └─────────────────────────
    │   │       
    │   ├───_partials
    │   │   │
    │   │   │   # all .hbs files in this folder are included as handlebars partials.
    │   │   │   head.hbs
    │   │   │   footer.hbs
    │   │   │   javascripts.hbs
    │   │   │   ...
    │   │   └─────────────────────────
    │   │       
    │   ├───atoms
    │   │   │
    │   │   │   # Atoms
    │   │   │   ...
    │   │   └─────────────────────────
    │   │       
    │   ├───molecules
    │   │   │
    │   │   │   # Molecules
    │   │   │   ...
    │   │   └─────────────────────────
    │   │       
    │   ├───organisms
    │   │   │
    │   │   │   # Organisms
    │   │   │   ...
    │   │   └─────────────────────────
    │   │       
    │   └───templates
    │       │
    │       │   # Templates
    │       │   ...
    │       └─────────────────────────
    │           
    │    
    ├───data
    │   │
    │   │   # all .json files in this folder are included as data in handlebars templates.
    │   │   index.js
    │   │   ...
    │   └─────────────────────────
    │    
    ├───node_modules
    │   │
    │   │   # all modules required to build
    │   │   ...
    │   └─────────────────────────
    │    
    │           
    └─output
        │   # all built templates end up here, unless you changed the defaults in settings.yml
        │   ...
        └─────────────────────────
