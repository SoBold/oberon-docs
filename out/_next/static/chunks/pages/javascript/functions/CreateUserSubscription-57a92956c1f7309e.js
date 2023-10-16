(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[21],{5995:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/javascript/functions/CreateUserSubscription",function(){return n(953)}])},953:function(e,t,n){"use strict";n.r(t),n.d(t,{__toc:function(){return c}});var s=n(5893),i=n(2673),r=n(9298),a=n(9812);n(6834);var o=n(2643);let c=[{depth:2,value:"CreateUserSubscription",id:"createusersubscription"},{depth:3,value:"Overview",id:"overview"},{depth:3,value:"Function Definition",id:"function-definition"},{depth:3,value:"Parameters",id:"parameters"},{depth:3,value:"Returns",id:"returns"},{depth:3,value:"Function Details",id:"function-details"},{depth:3,value:"Dependencies",id:"dependencies"},{depth:3,value:"Usage",id:"usage"}];function _createMdxContent(e){let t=Object.assign({h2:"h2",h3:"h3",p:"p",code:"code",pre:"pre",span:"span",ul:"ul",li:"li",strong:"strong",ol:"ol"},(0,o.a)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"createusersubscription",children:"CreateUserSubscription"}),"\n",(0,s.jsx)(t.h3,{id:"overview",children:"Overview"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"CreateUserSubscription"}),' function is designed to initialize a subscription for a user. Depending on the payment method used, the function handles the creation of subscriptions differently. In case of offline or PayPal payments, the function will instantiate a subscription and a "paid" transaction. Conversely, for Stripe payments, it establishes a "pending" transaction, which awaits a successful charge upon reaching the thank-you page.']}),"\n",(0,s.jsx)(t.h3,{id:"function-definition",children:"Function Definition"}),"\n",(0,s.jsx)(t.pre,{"data-language":"typescript","data-theme":"default",children:(0,s.jsxs)(t.code,{"data-language":"typescript","data-theme":"default",children:[(0,s.jsxs)(t.span,{className:"line",children:[(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"CreateUserSubscription"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"async"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" ("})]}),"\n",(0,s.jsxs)(t.span,{className:"line",children:[(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"    paymentRequest"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"PaymentRequest"})]}),"\n",(0,s.jsxs)(t.span,{className:"line",children:[(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"): "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"Promise"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"<"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"StartSignup"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:">"})]})]})}),"\n",(0,s.jsx)(t.h3,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"paymentRequest (PaymentRequest):"})," An object containing detailed information about the payment. It includes attributes like the gateway, prices, user ID, currency type, applicable coupon, tax details, and (optionally) a PayPal order ID."]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"returns",children:"Returns"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsxs)(t.strong,{children:[(0,s.jsx)(t.code,{children:"Promise<StartSignup>"}),":"]})," This function returns a Promise that resolves to a ",(0,s.jsx)(t.code,{children:"StartSignup"})," object. This object encapsulates a subscription and a transaction instance, reflecting the outcome of the subscription creation process."]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"function-details",children:"Function Details"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"API URL Construction:"})," Constructs the API URL designated for initiating user subscriptions."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Subscription Request:"})," Executes a POST request to the API, transmitting the payment details and expecting a response containing the subscription and transaction details."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Response Handling:"})," Parses the server's response and returns the relevant details."]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"dependencies",children:"Dependencies"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"obrnArgs:"})," This function utilizes the ",(0,s.jsx)(t.code,{children:"obrnArgs"})," object to derive the API URL and other pertinent configurations."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Interfaces:"})," The function leans on multiple interfaces such as ",(0,s.jsx)(t.code,{children:"PaymentRequest"}),", ",(0,s.jsx)(t.code,{children:"StartSignup"}),", ",(0,s.jsx)(t.code,{children:"Subscription"}),", and ",(0,s.jsx)(t.code,{children:"Transaction"})," for structured data handling."]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"CreateUserSubscription"})," function is paramount in applications or platforms offering subscription-based services or features. Ensuring accurate implementation and response handling is vital to offer users a seamless subscription experience and confirm the successful creation of their subscription."]})]})}let d={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,o.a)(),e.components);return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(_createMdxContent,{...e})}):_createMdxContent(e)},pageOpts:{filePath:"pages/javascript/functions/CreateUserSubscription.mdx",route:"/javascript/functions/CreateUserSubscription",timestamp:1697462863e3,pageMap:[{kind:"Meta",data:{index:"Introduction",database:"Database",structure:"Structure",javascript:"Javascript",about:{title:"About",type:"page"},contact:{title:"Contact ↗",type:"page",href:"https://twitter.com/shuding_",newWindow:!0}}},{kind:"MdxPage",name:"about",route:"/about"},{kind:"Folder",name:"database",route:"/database",children:[{kind:"Meta",data:{"custom-tables":"Custom Tables"}},{kind:"MdxPage",name:"custom-tables",route:"/database/custom-tables"}]},{kind:"MdxPage",name:"database",route:"/database"},{kind:"MdxPage",name:"index",route:"/"},{kind:"Folder",name:"javascript",route:"/javascript",children:[{kind:"Meta",data:{functions:"Functions",events:"Events"}},{kind:"Folder",name:"events",route:"/javascript/events",children:[{kind:"MdxPage",name:"MemberLogin",route:"/javascript/events/MemberLogin"},{kind:"MdxPage",name:"MemberLoginAttempt",route:"/javascript/events/MemberLoginAttempt"},{kind:"Meta",data:{MemberLoginAttempt:"MemberLoginAttempt",MemberLogin:"MemberLogin"}}]},{kind:"Folder",name:"functions",route:"/javascript/functions",children:[{kind:"MdxPage",name:"AttemptForgot",route:"/javascript/functions/AttemptForgot"},{kind:"MdxPage",name:"AttemptLogin",route:"/javascript/functions/AttemptLogin"},{kind:"MdxPage",name:"AttemptReset",route:"/javascript/functions/AttemptReset"},{kind:"MdxPage",name:"ChangeLoginScreen",route:"/javascript/functions/ChangeLoginScreen"},{kind:"MdxPage",name:"CheckMembershipPriceValid",route:"/javascript/functions/CheckMembershipPriceValid"},{kind:"MdxPage",name:"CreateUserSubscription",route:"/javascript/functions/CreateUserSubscription"},{kind:"MdxPage",name:"StripeCreatePaymentIntent",route:"/javascript/functions/StripeCreatePaymentIntent"},{kind:"MdxPage",name:"UpdateProfile",route:"/javascript/functions/UpdateProfile"},{kind:"MdxPage",name:"VerifyCoupon",route:"/javascript/functions/VerifyCoupon"},{kind:"Meta",data:{CreateUserSubscription:"CreateUserSubscription",VerifyCoupon:"VerifyCoupon",UpdateProfile:"UpdateProfile",StripeCreatePaymentIntent:"StripeCreatePaymentIntent",CheckMembershipPriceValid:"CheckMembershipPriceValid",ChangeLoginScreen:"ChangeLoginScreen",AttemptReset:"AttemptReset",AttemptLogin:"AttemptLogin",AttemptForgot:"AttemptForgot"}}]}]},{kind:"Folder",name:"structure",route:"/structure",children:[{kind:"Meta",data:{classes:"Classes"}},{kind:"Folder",name:"classes",route:"/structure/classes",children:[{kind:"Meta",data:{models:"Models"}},{kind:"Folder",name:"models",route:"/structure/classes/models",children:[{kind:"MdxPage",name:"coupon",route:"/structure/classes/models/coupon"},{kind:"MdxPage",name:"event",route:"/structure/classes/models/event"},{kind:"MdxPage",name:"member",route:"/structure/classes/models/member"},{kind:"MdxPage",name:"membership",route:"/structure/classes/models/membership"},{kind:"MdxPage",name:"subscription",route:"/structure/classes/models/subscription"},{kind:"MdxPage",name:"transaction",route:"/structure/classes/models/transaction"},{kind:"Meta",data:{coupon:"Coupon",event:"Event",member:"Member",membership:"Membership",subscription:"Subscription",transaction:"Transaction"}}]}]}]}],flexsearch:{codeblocks:!0},title:"Createusersubscription",headings:c},pageNextRoute:"/javascript/functions/CreateUserSubscription",nextraLayout:r.ZP,themeConfig:a.Z};t.default=(0,i.j)(d)},9812:function(e,t,n){"use strict";var s=n(5893);n(7294);let i={logo:(0,s.jsx)("span",{children:"Oberon"}),project:{link:"https://github.com/SoBold/oberon"},docsRepositoryBase:"https://github.com/SoBold/oberon-docs",footer:{text:"Oberon Docs | SoBold"}};t.Z=i}},function(e){e.O(0,[774,361,888,179],function(){return e(e.s=5995)}),_N_E=e.O()}]);