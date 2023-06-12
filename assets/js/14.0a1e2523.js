(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{291:function(e,t,a){"use strict";a.r(t);var o=a(14),r=Object(o.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"faq"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#faq"}},[e._v("#")]),e._v(" FAQ")]),e._v(" "),t("h2",{attrs:{id:"set-up-kgrid"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#set-up-kgrid"}},[e._v("#")]),e._v(" Set up KGrid")]),e._v(" "),t("h4",{attrs:{id:"can-i-use-openjdk-to-meet-the-java-requirement"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#can-i-use-openjdk-to-meet-the-java-requirement"}},[e._v("#")]),e._v(" 🌌 Can I use OpenJDK to meet the JAVA requirement?")]),e._v(" "),t("p",[e._v("Yes. OpenJDK 12 can be found "),t("a",{attrs:{href:"https://jdk.java.net/12/",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h4",{attrs:{id:"which-node-js-version-shall-i-install-to-run-kgrid-cli"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#which-node-js-version-shall-i-install-to-run-kgrid-cli"}},[e._v("#")]),e._v(" 🌌 Which Node.js version shall I install to run KGrid CLI ?")]),e._v(" "),t("p",[e._v("The LTS version of "),t("a",{attrs:{href:"hhtps://www.nodejs.org"}},[e._v("Node.js")]),e._v(" is highly recommended.")]),e._v(" "),t("h4",{attrs:{id:"i-m-having-problems-with-permissions-when-i-tried-to-install-or-run-npm-it-suggests-i-use-sudo-how-do-i-fix"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#i-m-having-problems-with-permissions-when-i-tried-to-install-or-run-npm-it-suggests-i-use-sudo-how-do-i-fix"}},[e._v("#")]),e._v(" 🌌 I'm having problems with permissions when I tried to install or run npm. It suggests I use "),t("code",[e._v("sudo")]),e._v(". How do I fix?")]),e._v(" "),t("p",[e._v("You should not have to use "),t("code",[e._v("sudo")]),e._v(" to install "),t("code",[e._v("node")]),e._v(", "),t("code",[e._v("npm")]),e._v(", or any additional packages. If you run into trouble see "),t("a",{attrs:{href:"https://timonweb.com/posts/install-npm-packages-without-sudo/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://timonweb.com/posts/install-npm-packages-without-sudo/"),t("OutboundLink")],1)]),e._v(" "),t("h4",{attrs:{id:"how-do-i-check-if-i-have-the-latest-version-of-kgrid-components"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-do-i-check-if-i-have-the-latest-version-of-kgrid-components"}},[e._v("#")]),e._v(" 🌌 How do I check if I have the latest version of KGRID components?")]),e._v(" "),t("p",[e._v("The easiest way is to use KGRID CLI. Run "),t("code",[e._v("kgrid --version")]),e._v(" will check and show the versions for KGRID components as well as JAVA, Node.js.")]),e._v(" "),t("p",[e._v("If you 'd like to check a remote KGrid Library or Activator, call "),t("code",[e._v("/info")]),e._v(" of the server. For details, please refer to the "),t("a",{attrs:{href:"http://kgrid.org/guides/swagger/",target:"_blank",rel:"noopener noreferrer"}},[e._v("KGRID API documentation"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"develop-a-knowledge-object"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#develop-a-knowledge-object"}},[e._v("#")]),e._v(" Develop a Knowledge Object")]),e._v(" "),t("h4",{attrs:{id:"i-am-having-problem-with-npm-install-failing-with-node-gyp-what-could-be-wrong"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#i-am-having-problem-with-npm-install-failing-with-node-gyp-what-could-be-wrong"}},[e._v("#")]),e._v(" 🌌 I am having problem with "),t("code",[e._v("npm install")]),e._v(", failing with "),t("code",[e._v("node-gyp")]),e._v(". What could be wrong?")]),e._v(" "),t("p",[e._v("One possibility is that your project has dependencies on some native add-on node modules which in turn require Python27 to build on the fly. Install "),t("a",{attrs:{href:"https://www.python.org/downloads/release/python-2716/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Python27"),t("OutboundLink")],1),e._v(" and try again.")]),e._v(" "),t("h4",{attrs:{id:"i-changed-the-payload-code-and-rebuilt-the-ko-however-the-ko-service-is-still-using-the-old-code-how-to-fix-that"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#i-changed-the-payload-code-and-rebuilt-the-ko-however-the-ko-service-is-still-using-the-old-code-how-to-fix-that"}},[e._v("#")]),e._v(" 🌌 I changed the payload code and rebuilt the KO. However, the KO Service is still using the old code. How to fix that?")]),e._v(" "),t("p",[e._v("If the "),t("code",[e._v("auto-reload")]),e._v(" feature is not turned on for the activator, you will need to manually re-activate the updated KO so that the KO service can be refreshed. To do so, call the "),t("code",[e._v("/activate")]),e._v(" of the activator. Please refer to the "),t("a",{attrs:{href:"http://kgrid.org/guides/swagger/",target:"_blank",rel:"noopener noreferrer"}},[e._v("KGRID API documentation"),t("OutboundLink")],1),e._v(" for details.")]),e._v(" "),t("h2",{attrs:{id:"kgrid-api"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kgrid-api"}},[e._v("#")]),e._v(" KGrid API")]),e._v(" "),t("h4",{attrs:{id:"how-can-i-upload-multiple-knowledge-objects"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-can-i-upload-multiple-knowledge-objects"}},[e._v("#")]),e._v(" 🌌 How can I upload multiple Knowledge Objects?")]),e._v(" "),t("p",[e._v("You can create a manifest file containing a list of urls pointing to the artifacts. These KOs should be packaged in ZIP format and retrievable from the host. You can then "),t("code",[e._v("POST")]),e._v(" your manifest "),t("code",[e._v("/kos/manifest")]),e._v(". For details, please refer to the "),t("a",{attrs:{href:"http://kgrid.org/guides/swagger/",target:"_blank",rel:"noopener noreferrer"}},[e._v("KGRID API documentation"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h4",{attrs:{id:""}},[t("a",{staticClass:"header-anchor",attrs:{href:"#"}},[e._v("#")]),e._v(" 🌌")]),e._v(" "),t("h2",{attrs:{id:"miscellaneous"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#miscellaneous"}},[e._v("#")]),e._v(" Miscellaneous")]),e._v(" "),t("h4",{attrs:{id:"how-can-i-get-technical-support"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-can-i-get-technical-support"}},[e._v("#")]),e._v(" 🌌 How can I get technical support?")]),e._v(" "),t("p",[e._v("You can browse through the guides, tutorials and other materials on this website.\nIf your question remains unanswered, you can send an email to: "),t("a",{attrs:{href:"mailto:kgrid-developers@umich.edu?subject=%5BKGrid%5DSupport"}},[e._v("kgrid-developers@umich.edu")])])])}),[],!1,null,null,null);t.default=r.exports}}]);