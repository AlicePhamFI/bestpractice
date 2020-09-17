(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{Rcnc:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return o})),n.d(t,"default",(function(){return c}));n("5hJT"),n("W1QL"),n("K/PF"),n("t91x"),n("75LO"),n("PJhk");var a=n("SAVP"),r=n("TjRS");n("aD51");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var o={};void 0!==o&&o&&o===Object(o)&&Object.isExtensible(o)&&!o.hasOwnProperty("__filemeta")&&Object.defineProperty(o,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"docs/best-practices/technology-choices.md"}});var l={_frontmatter:o},s=r.a;function c(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(a.b)(s,i({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"technology-choices"},"Technology choices"),Object(a.b)("p",null,"Document about the tech stack used for developing code in the City of\nHelsinki."),Object(a.b)("h2",{id:"backend-services"},"Backend services"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"For most things: Python 3 with Django.",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Suggested versions for the new projects are Python 3.7 and Django 2.2 LTS."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"https://www.django-rest-framework.org/"}),"Django REST framework")," for REST APIs"),Object(a.b)("li",{parentName:"ul"},"Graphene for GraphQL APIs, using ",Object(a.b)("a",i({parentName:"li"},{href:"https://docs.graphene-python.org/projects/django/en/latest/"}),"Graphene-Django"),"."),Object(a.b)("li",{parentName:"ul"},"Postgres / PostGIS for background databases"))),Object(a.b)("li",{parentName:"ul"},"For stateless GraphQL proxies / API gateways:",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Node.js with Apollo"))),Object(a.b)("li",{parentName:"ul"},"For serving static files of React apps:",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Node.js with express (and server-side rendering)"))),Object(a.b)("li",{parentName:"ul"},"Make all APIs available through api.hel.fi")),Object(a.b)("h2",{id:"frontend-services"},"Frontend services"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},'For most things: React with "standard" extensions (= just use\ncreate-react-app).',Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"preferably TypeScript"),Object(a.b)("li",{parentName:"ul"},"yarn and webpack"),Object(a.b)("li",{parentName:"ul"},"redux for state"),Object(a.b)("li",{parentName:"ul"},"Always set up and use server-side rendering"))),Object(a.b)("li",{parentName:"ul"},"always use components from Helsinki Design System\n(",Object(a.b)("a",i({parentName:"li"},{href:"https://github.com/City-of-Helsinki/helsinki-design-system"}),"https://github.com/City-of-Helsinki/helsinki-design-system"),").",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Contribute your components into HDS and use them by including the\npackage as a dependency"))),Object(a.b)("li",{parentName:"ul"},"Usually, the front pages of citizen directed services should be made\nwith Wordpress.  (So that they can be changed without coder\nintervention)",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"don't customise wordpress if you can avoid it",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"if you can't, adhere to their coding standards to try to make the\ncode work across upgrades")))))),Object(a.b)("h2",{id:"creating-libraries"},"Creating Libraries"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"use npm and PyPI for distribution"),Object(a.b)("li",{parentName:"ul"},"always include own libraries via npm/PyPI, never directly via version\ncontrol / local installation")),Object(a.b)("h2",{id:"helpers--tooling"},"Helpers & tooling"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"docker (and Dockerfiles) for creating runnable, publishable images",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"make the image so that ",Object(a.b)("inlineCode",{parentName:"li"},"docker run XXX")," (with environment variables)\nbrings up a working service"),Object(a.b)("li",{parentName:"ul"},"test, stage, and production environments are always installed by the\nDocker images in dockerhub"),Object(a.b)("li",{parentName:"ul"},"docker-compose for reproducibly bringing up dev environments"))),Object(a.b)("li",{parentName:"ul"},"Use bash (for simple tasks) or Python 3 (for complex ones).",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"if it has more than one loop, or any data processing, it's complex"))),Object(a.b)("li",{parentName:"ul"},"Gitlab or Travis for build, test and deployment automation",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"the build instructions should be one command only.  If it's multiple\ncommands, put it in a script."))),Object(a.b)("li",{parentName:"ul"},"Ansible for remote configuration of hosts"),Object(a.b)("li",{parentName:"ul"},"Terraform for remote configuration of deployment environments"),Object(a.b)("li",{parentName:"ul"},"Helm for remote configuration of Kubernetes")))}c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"docs/best-practices/technology-choices.md"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---docs-best-practices-technology-choices-md-4b7b997b4245f2126de9.js.map