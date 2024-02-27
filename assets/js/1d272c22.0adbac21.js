"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[56165],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),h=i,m=d["".concat(c,".").concat(h)]||d[h]||u[h]||a;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},16604:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(87462),i=(n(67294),n(3905));const a={title:"\ud83d\udcd3 3.2.0.17 Redirecting to HTTPS and Issuing a Security Certificate",day:"weekend",id:"3-2-0-17-redirecting-to-https-and-issuing-a-security-certificate",hide_table_of_contents:!0},o=void 0,s={unversionedId:"c-and-net/basic-web-applications/3-2-0-17-redirecting-to-https-and-issuing-a-security-certificate",id:"c-and-net/basic-web-applications/3-2-0-17-redirecting-to-https-and-issuing-a-security-certificate",title:"\ud83d\udcd3 3.2.0.17 Redirecting to HTTPS and Issuing a Security Certificate",description:"In this lesson, we'll learn how to enable HTTPS redirection and set up security certificates for our web apps during development. While it's not always necessary to use HTTPS during development, it does provide additional security.",source:"@site/docs/3_c-and-net/2_basic-web-applications/AQ-3-2-0-17-redirecting-to-https-and-issuing-a-security-certificate.md",sourceDirName:"3_c-and-net/2_basic-web-applications",slug:"/c-and-net/basic-web-applications/3-2-0-17-redirecting-to-https-and-issuing-a-security-certificate",permalink:"/c-and-net/basic-web-applications/3-2-0-17-redirecting-to-https-and-issuing-a-security-certificate",draft:!1,tags:[],version:"current",frontMatter:{title:"\ud83d\udcd3 3.2.0.17 Redirecting to HTTPS and Issuing a Security Certificate",day:"weekend",id:"3-2-0-17-redirecting-to-https-and-issuing-a-security-certificate",hide_table_of_contents:!0},sidebar:"c-and-net",previous:{title:"\ud83d\udcd3 3.2.0.16 Debugging Views and Configuring a Development Environment with launchSettings.json",permalink:"/c-and-net/basic-web-applications/3-2-0-16-debugging-views-and-configuring-a-development-environment-with-launchsettings-json"},next:{title:"\ud83d\udcd3 3.2.0.18 Configuration Quick Reference",permalink:"/c-and-net/basic-web-applications/3-2-0-18-configuration-quick-reference"}},c={},l=[{value:"Enabling HTTPS Redirection",id:"enabling-https-redirection",level:2},{value:"Issuing and Trusting a Security Certificate",id:"issuing-and-trusting-a-security-certificate",level:2},{value:"Granting Keychain Access For Students Working on Macs",id:"granting-keychain-access-for-students-working-on-macs",level:3},{value:"Don&#39;t Have a Security Certificate?",id:"dont-have-a-security-certificate",level:3}],p={toc:l},d="wrapper";function u(e){let{components:t,...a}=e;return(0,i.kt)(d,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In this lesson, we'll learn how to enable HTTPS redirection and set up security certificates for our web apps during development. While it's not always necessary to use HTTPS during development, it does provide additional security. "),(0,i.kt)("p",null,"As we learned in previous lessons, ",(0,i.kt)("strong",{parentName:"p"},"HTTP"),' is a protocol to transfer documents (like HTML) between web browsers (also called "clients") and web servers (also called "servers"). All modern and widely-used browsers use HTTP. However, HTTP is not secure, which is why HTTPS was developed. The "S" in HTTPS stands for "secure" as ',(0,i.kt)("strong",{parentName:"p"},"HTTPS")," encrypts all communication between a client and a server."),(0,i.kt)("p",null,"Web apps don't need to use HTTPS, though it is considered best practice to do so. In this lesson we'll learn how to enable HTTPS redirection and set up security certificates for our ASP.NET Core apps. Later in the course, we'll learn how to enable ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security"},"HSTS"),", which enforces that a website should only be accessed through HTTPS, and not merely redirected to from HTTP. "),(0,i.kt)("h2",{id:"enabling-https-redirection"},"Enabling HTTPS Redirection"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"If you haven't noticed, ASP.NET Core offers two ports to access our web app, one for HTTP and the other for HTTPS:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"HTTP at ",(0,i.kt)("em",{parentName:"li"},"http://localhost:5000")),(0,i.kt)("li",{parentName:"ul"},"HTTPS at ",(0,i.kt)("em",{parentName:"li"},"https://localhost:5001"))),(0,i.kt)("p",null,"So far, we've primarily accessed http://localhost:5000, but we can access either. To increase security in our app, we can configure our host to redirect to HTTPS when our web app is accessed via HTTP. To do this, we need to update ",(0,i.kt)("inlineCode",{parentName:"p"},"Program.cs")," to add a middleware to our request pipeline. We'll add ",(0,i.kt)("inlineCode",{parentName:"p"},"app.UseHttpsRedirection();")," right below the creation of our ",(0,i.kt)("inlineCode",{parentName:"p"},"WebApplication")," host ",(0,i.kt)("inlineCode",{parentName:"p"},"app"),". Check out the code snippet below that shows the updated ",(0,i.kt)("inlineCode",{parentName:"p"},"Program.cs"),' from the "Friend Letter" project.'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},'using Microsoft.AspNetCore.Builder;\nusing Microsoft.Extensions.DependencyInjection;\n\nnamespace FriendLetter\n{\n  class Program\n  {\n    static void Main(string[] args)\n    {\n      WebApplicationBuilder builder = WebApplication.CreateBuilder(args);\n\n      builder.Services.AddControllersWithViews();\n\n      WebApplication app = builder.Build();\n\n      // app.UseDeveloperExceptionPage();\n      app.UseHttpsRedirection();\n\n      app.UseRouting();\n\n      app.MapControllerRoute(\n        name: "default",\n        pattern: "{controller=Home}/{action=Index}/{id?}"\n      );\n\n      app.Run();\n    }\n  }\n}\n')),(0,i.kt)("p",null,"Note that if we included the ",(0,i.kt)("inlineCode",{parentName:"p"},"app.UseDeveloperExceptionPage();")," middleware, we'd need to add ",(0,i.kt)("inlineCode",{parentName:"p"},"app.UseHttpsRedirection();")," right below it. "),(0,i.kt)("p",null,"Now with just one new line of code, if we access our application at ",(0,i.kt)("em",{parentName:"p"},"http://localhost:5000"),", we'll be redirected to ",(0,i.kt)("em",{parentName:"p"},"https://localhost:5001"),". Pretty neat! We recommend that you enable HTTPS redirection for all of your ASP.NET Core web apps going forward."),(0,i.kt)("h2",{id:"issuing-and-trusting-a-security-certificate"},"Issuing and Trusting a Security Certificate"),(0,i.kt)("hr",null),(0,i.kt)("p",null,'For HTTPS to work, we need to have a security certificate set up for our web apps. The security certificate is a digital certificate that verifies the identity of a website and handles encrypting the data that\'s transferred between the website ("client") and the web server ("server"). These certificates are issued by certification authorities and follow specific protocols for encryption (see ',(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Glossary/SSL"},"SSL")," and ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/Security/Transport_Layer_Security"},"TLS")," for more information). "),(0,i.kt)("p",null,"Typically security certificates are set up during the process of hosting a web app. However, when using HTTPS in development, we need to set one up via .NET. Fortunately, this is very easy to do via the command line."),(0,i.kt)("p",null,"First let's learn how to recognize when there are issues with the security certificate. If we ever navigate to ",(0,i.kt)("em",{parentName:"p"},"https://localhost:5001/")," and we get the following message in the browser, that means that there's something wrong with our security certificate:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Message in the web browser that indicates the connection is not safe.",src:n(86522).Z,width:"695",height:"397"})),(0,i.kt)("p",null,"The good thing to note is that it's very easy to fix this issue. Simply open your terminal and enter the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ dotnet dev-certs https --trust\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note that if you are taking classes in person at Epicodus, you do not need to run this command on the campus mac computers.")),(0,i.kt)("p",null,"When we enter this command, we should see a pop-up box with a message asking yet whether we want to proceed. Select the button that corresponds to 'yes', and then you'll have a trusted certificate for HTTPS during development."),(0,i.kt)("p",null,"The next step is to restart your web browser to clear its cache, then navigate to ",(0,i.kt)("em",{parentName:"p"},"https://localhost:5001/")," to confirm that you can access the site without error."),(0,i.kt)("p",null,"Note that with the original download of the .NET 6 SDK, we also downloaded a security certificate. So the process outlined above doesn't create a new one, but trusts the already existing certificate."),(0,i.kt)("p",null,"And with that, we're ready to go! You should only have to do this once for your computer, or after a major update like upgrading to a new version of .NET."),(0,i.kt)("h3",{id:"granting-keychain-access-for-students-working-on-macs"},"Granting Keychain Access For Students Working on Macs"),(0,i.kt)("p",null,"With ",(0,i.kt)("inlineCode",{parentName:"p"},"app.UseHttpsRedirection();")," enabled, students who are working on macs in person or remotely may be asked to be granted keychain access to get the details of the dev cert for each new application they create. The request will pop up after you run your web app with ",(0,i.kt)("inlineCode",{parentName:"p"},"dotnet watch run"),", and it will look similar to the following image with some details being different."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Pop-up box with request to access keychain to get the details of the dev cert on a mac.",src:n(46942).Z,width:"902",height:"430"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},'If you see this request after running your app, enter in your password and select "always allow".'),' For  mac computers on campus at Epicodus, the password is "epicodus". '),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"If for some reason you cannot grant access to your keychain and this is preventing you from running your application in the browser"),", you can always use HTTP instead of HTTPS. Simply remove the line ",(0,i.kt)("inlineCode",{parentName:"p"},"app.UseHttpsRedirection();")," from ",(0,i.kt)("inlineCode",{parentName:"p"},"Program.cs"),"."),(0,i.kt)("h3",{id:"dont-have-a-security-certificate"},"Don't Have a Security Certificate?"),(0,i.kt)("p",null,"Not having a certificate at all is extremely unlikely. You'll know you don't have a security certificate, because you won't be able to access localhost via HTTPS at all. In this case, to generate a security certificate, run the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ dotnet dev-certs https\n")),(0,i.kt)("p",null,"And then trust the certificate with this command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ dotnet dev-certs https --trust\n")),(0,i.kt)("p",null,"You can also clear all existing certificates and check whether you have one issued to begin with. To see all possible commands and tools for ",(0,i.kt)("inlineCode",{parentName:"p"},"dev-certs"),", enter the following command into your command line:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ dotnet dev-certs https --help\n")),(0,i.kt)("p",null,"To learn more about the ",(0,i.kt)("inlineCode",{parentName:"p"},"dev-certs")," tool, visit ",(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/core/tools/dotnet-dev-certs"},"the Microsoft documentation on ",(0,i.kt)("inlineCode",{parentName:"a"},"dev-certs")),"."),(0,i.kt)("p",null,"To learn more about trusting the ASP.NET Core development security certificate, visit ",(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/aspnet/core/security/enforcing-ssl?view=aspnetcore-6.0&tabs=visual-studio-code#trust-the-aspnet-core-https-development-certificate-on-windows-and-macos"},"this Microsoft documentation"),"."))}u.isMDXComponent=!0},46942:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/dotnet-dev-cert-password-request-75b690556dc70c8585a0ae600c2f4938.png"},86522:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/security-cert-connection-not-private-d7b3c7302ed41f31f13a340c198b57db.png"}}]);