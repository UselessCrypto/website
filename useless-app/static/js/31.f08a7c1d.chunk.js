(this["webpackJsonpthefront-js--react-scripts"]=this["webpackJsonpthefront-js--react-scripts"]||[]).push([[31],{741:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return p}));var a=n(1),o=n(0),r=(n(2),n(696)),s=n(71),c=n(151),i=n(4),l=n(5),d=[{name:"backgroundImage",type:"string",default:"",description:"The parallax background image"},{name:"children",type:"node",default:"",description:"The content"},{name:"className",type:"string",default:"",description:"External classes"}],p=function(e){var t=Object.assign({},e);return Object(o.jsxs)("div",Object(a.a)(Object(a.a)({},t),{},{children:[Object(o.jsx)(c.e,{title:"Description",gutterBottom:!0,children:Object(o.jsx)(c.b,{title:"Parallax",path:"src/components/organisms/Parallax/Parallax.js",description:"Component to display the Parallax backgrounds"})}),Object(o.jsx)(c.e,{title:"Import",gutterBottom:!0,children:Object(o.jsx)(c.a,{code:"\nimport { Parallax } from 'components/organisms';\n// or\nimport Parallax from 'components/organisms/Parallax';\n"})}),Object(o.jsx)(c.e,{title:"Props & Methods",gutterBottom:!0,children:Object(o.jsx)(c.d,{dataProperties:d})}),Object(o.jsx)(c.e,{title:"Basic Example",gutterBottom:!0,children:Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(r.a,{marginBottom:2,padding:2,border:"1px solid #ccc",borderRadius:"4px",position:"relative",children:Object(o.jsx)(i.t,{backgroundImage:"https://assets.maccarianagency.com/the-front/photos/blog/cover2.jpg",children:Object(o.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#007b3d3d"},children:Object(o.jsx)(i.b,{withShadow:!0,style:{width:500,height:"auto",background:"transparent"},children:Object(o.jsx)(l.e,{title:Object(o.jsxs)("span",{style:{color:"white"},children:["Use flexible components.",Object(o.jsx)("br",{}),Object(o.jsx)(s.a,{component:"span",variant:"inherit",color:"primary",children:"to build an app quickly."})]}),subtitle:Object(o.jsx)("span",{style:{color:"white"},children:"TheFront styles and extends Material UI components, but also included brand new landing page focused components."})})})})})}),Object(o.jsx)(c.a,{code:"\nimport React from 'react';\nimport { Box, Typography } from '@material-ui/core';\nimport { Parallax } from 'components/organisms';\nimport { SectionHeader } from 'components/molecules';\nimport { CardBase } from 'components/organisms';\n\nexport default function Example() {\n  return (\n    <Box marginBottom={2} padding={2} border=\"1px solid #ccc\" borderRadius=\"4px\">\n      <Parallax backgroundImage=\"https://assets.maccarianagency.com/the-front/photos/blog/cover2.jpg\">\n        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#007b3d3d' }}>\n          <CardBase withShadow style={{ width: 500, height: 'auto', background: 'transparent' }}>\n            <SectionHeader\n              title={\n                <span style={{ color: 'white' }}>\n                  Use flexible components.<br />\n                  <Typography component=\"span\" variant=\"inherit\" color=\"primary\">\n                  to build an app quickly.\n                  </Typography>\n                </span>\n              }\n              subtitle={<span style={{ color: 'white' }}>\n                TheFront styles and extends Material UI components, but also included brand new landing page focused components.\n              </span>}\n            />\n          </CardBase>\n        </div>\n      </Parallax>\n    </Box>\n  );\n}\n"})]})})]}))}}}]);