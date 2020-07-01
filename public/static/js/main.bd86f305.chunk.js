(this["webpackJsonpreact-day-5"]=this["webpackJsonpreact-day-5"]||[]).push([[0],{40:function(e,t,a){},59:function(e,t,a){e.exports=a(93)},91:function(e,t,a){},93:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(20),r=a.n(l),s=a(21),i=a(12),c=a(13),m=a(15),d=a(14),u=(a(40),a(64),a(65),a(7)),h=a(6),p=a(10),b=a.n(p),g="https://shelfely.herokuapp.com/api",E=a(4),f=(a(86),function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).state={books:Object(s.a)(e.props.books),allBooks:!0,filterBy:"All Books"},e.handleReadDropDown=function(){var t=e.props.books.filter((function(e){return e.alreadyRead}));e.setState({books:t,allBooks:!1,filterBy:"Already Read"})},e.handleReadDropDown2=function(){var t=e.props.books.filter((function(e){return e.alreadyRead}));e.setState({books:t,allBooks:!1})},e.handleToReadDropDown=function(){var t=e.props.books.filter((function(e){return!e.alreadyRead}));e.setState({books:t,allBooks:!1,filterBy:"Wish To-Read"})},e.handleToReadDropDown2=function(){var t=e.props.books.filter((function(e){return!e.alreadyRead}));e.setState({books:t,allBooks:!1})},e.handleAllBooks=function(){e.setState({allBooks:!0,filterBy:"All Books"})},e.handleBookshelf=function(t){var a=Object(s.a)(e.props.books),n=a.findIndex((function(e){return t===e.title}));a[n].alreadyRead=!a[n].alreadyRead;var o=a[n],l=o.title,r=o.author,i=o.date,c=o.description,m=o.alreadyRead;e.setState({books:a}),b.a.patch("".concat(g,"/books/").concat(a[n]._id),{title:l,author:r,date:i,description:c,alreadyRead:m}).then((function(e){console.log(e)})),e.state.allBooks||e.handleFilterBy(a[n])},e.handleFilterBy=function(t){t.alreadyRead?e.handleToReadDropDown2():e.handleReadDropDown()},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return this.props.loggedInUser?this.state.allBooks?o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{class:"myDetail dropdown"},o.a.createElement("button",{class:"filterByButton dropdown-toggle",type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-expanded":"false"},this.state.filterBy),o.a.createElement("div",{class:"dropdown-menu","aria-labelledby":"dropdownMenuButton"},o.a.createElement("button",{className:"dropdown-item",type:"submit",onClick:this.handleAllBooks},"All Books"),o.a.createElement("button",{type:"submit",onClick:this.handleReadDropDown,class:"dropdown-item"},"Already Read"),o.a.createElement("button",{class:"dropdown-item",type:"submit",onClick:this.handleToReadDropDown},"WishList"))),o.a.createElement(E.Table,null,o.a.createElement(E.Thead,null,o.a.createElement(E.Tr,null,o.a.createElement(E.Th,null,"Cover"),o.a.createElement(E.Th,null,"Title"),o.a.createElement(E.Th,null,"Author"),o.a.createElement(E.Th,null,"Published Date"),o.a.createElement(E.Th,null,"Category"),o.a.createElement(E.Th,null,"Read"))),o.a.createElement(E.Tbody,null,this.props.books.map((function(t,a){if(t.user===e.props.loggedInUser._id)return console.log(typeof t.date),o.a.createElement(E.Tr,{key:a},o.a.createElement(E.Td,null,o.a.createElement("img",{style:{width:"100px",height:"120px"},src:t.image})),o.a.createElement(E.Td,null,o.a.createElement(h.b,{to:"/book/".concat(t._id),class:"card-text"},o.a.createElement("h3",null,t.title))),o.a.createElement(E.Td,null,o.a.createElement("h2",null,t.author)),o.a.createElement(E.Td,null,o.a.createElement("h2",null,t.date)),o.a.createElement(E.Td,null,o.a.createElement("h2",null,t.category)),t.alreadyRead?o.a.createElement(E.Td,null,o.a.createElement("button",{onClick:function(){e.handleBookshelf(t.title)},style:{padding:"0",border:"none",backgroundColor:"rgba(135, 154, 179, 0.97)"}},o.a.createElement("h4",{style:{fontSize:"45px",padding:"10px"},className:"read"},"\u2705 "))):o.a.createElement(E.Td,null,o.a.createElement("button",{onClick:function(){e.handleBookshelf(t.title)},style:{padding:"0",border:"none",backgroundColor:"rgba(135, 154, 179, 0.97)"}},o.a.createElement("h4",{className:"read"},o.a.createElement("img",{style:{width:"75px",height:"75px"},src:"https://cdn.pixabay.com/photo/2016/05/31/10/52/not-yet-1426593_960_720.png"})))))}))))):o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{class:"myDetail dropdown"},o.a.createElement("button",{class:" filterByButton dropdown-toggle",type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},this.state.filterBy),o.a.createElement("div",{class:"dropdown-menu","aria-labelledby":"dropdownMenuButton"},o.a.createElement("button",{type:"submit",onClick:this.handleAllBooks,class:"dropdown-item"},"All Books"),o.a.createElement("button",{type:"submit",onClick:this.handleReadDropDown,class:"dropdown-item"},"Already Read"),o.a.createElement("button",{class:"dropdown-item",type:"submit",onClick:this.handleToReadDropDown},"WishList"))),o.a.createElement(E.Table,null,o.a.createElement(E.Thead,null,o.a.createElement(E.Tr,null,o.a.createElement(E.Th,null,"Cover"),o.a.createElement(E.Th,null,"Title"),o.a.createElement(E.Th,null,"Author"),o.a.createElement(E.Th,null,"Published Date"),o.a.createElement(E.Th,null,"Category"),o.a.createElement(E.Th,null,"Read"))),o.a.createElement(E.Tbody,null,this.state.books.map((function(t,a){if(t.user===e.props.loggedInUser._id)return o.a.createElement(E.Tr,{key:a},o.a.createElement(E.Td,null,o.a.createElement("img",{style:{width:"140px",height:"170px"},src:t.image})),o.a.createElement(E.Td,null,o.a.createElement(h.b,{to:"/book/".concat(t._id),class:"card-text"},o.a.createElement("h3",null,t.title))),o.a.createElement(E.Td,null,o.a.createElement("h2",null,t.author)),o.a.createElement(E.Td,null,o.a.createElement("h2",null,t.date)),o.a.createElement(E.Td,null,o.a.createElement("h2",null,t.category)),t.alreadyRead?o.a.createElement(E.Td,null,o.a.createElement("button",{onClick:function(){e.handleBookshelf(t.title)},style:{padding:"0",border:"none",backgroundColor:"rgba(135, 154, 179, 0.97)"}},o.a.createElement("h4",{style:{fontSize:"45px",padding:"10px"},className:"read"},"\u2705 "))):o.a.createElement(E.Td,null,o.a.createElement("button",{onClick:function(){e.handleBookshelf(t.title)},style:{padding:"0",border:"none",backgroundColor:"rgba(135, 154, 179, 0.97)"}},o.a.createElement("h4",{className:"read"},o.a.createElement("img",{style:{width:"75px",height:"75px"},src:"https://cdn.pixabay.com/photo/2016/05/31/10/52/not-yet-1426593_960_720.png"})))))}))))):o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",{style:{color:"white",fontFamily:"Kameron",textAlign:"center",margin:"50px",padding:"20px"},className:"myDetail"},"Shelfely is both a virtual library and bookshelf."),o.a.createElement("h1",{style:{color:"white",fontFamily:"Kameron",textAlign:"center",margin:"50px",padding:"20px"},className:"myDetail"}," With shelfely you will be able to search any book and store it in your shelf!"),o.a.createElement("h2",{style:{color:"white",fontFamily:"Kameron",textAlign:"center",margin:"50px",padding:"20px"},className:"myDetail"},"Please sign in to start"))}}]),a}(o.a.Component)),y=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).state={titleError:!1,authorError:!1,showAddDescription:!1},e.onHandleAdd=function(t){t.preventDefault();var a=t.target.title.value,n=t.target.author.value;a&&n?(e.props.onAdd(t),e.setState({titleError:!1,authorError:!1})):e.setState({titleError:!a,authorError:!n})},e.handleDescription=function(t){e.setState({showAddDescription:t})},e}return Object(c.a)(a,[{key:"render",value:function(){return this.props.loggedInUser?o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"add1-book"},o.a.createElement("form",{className:"add-book myDetail",onSubmit:this.onHandleAdd},o.a.createElement("div",{class:"form-group"},o.a.createElement("label",{className:"my-labels",for:"name"},"Name (Required) "),this.state.titleError&&o.a.createElement("p",{style:{color:"brown"}},"Please enter a title"),o.a.createElement("input",{name:"title",type:"text",class:"form-control",id:"name","aria-describedby":"emailHelp",placeholder:"Enter name"})),o.a.createElement("div",{class:"form-group"},o.a.createElement("label",{className:"my-labels",for:"author"},"Author (Required)"),this.state.authorError&&o.a.createElement("p",{style:{color:"brown"}},"Please enter a author"),o.a.createElement("input",{name:"author",type:"text",class:"form-control",id:"author",placeholder:"Enter an author"})),o.a.createElement("div",{class:"form-group"},o.a.createElement("label",{className:"my-labels",for:"date"},"Date Published"),o.a.createElement("input",{name:"date",type:"date",class:"form-control",id:"date",placeholder:""})),o.a.createElement("div",{class:"form-group"},o.a.createElement("label",{className:"my-labels",for:"image"},"Image"),o.a.createElement("input",{name:"image",type:"file",class:"form-control",id:"image",placeholder:""})),o.a.createElement("div",{class:"form-group"},o.a.createElement("label",{for:"description"},"Description"),o.a.createElement("textarea",{name:"description",type:"text",class:"form-control",id:"description",placeholder:""})),o.a.createElement("div",{class:"form-group"},o.a.createElement("label",{className:"my-labels",for:"category"},"Category"),o.a.createElement("input",{name:"category",type:"text",class:"form-control",id:"category",placeholder:""})),o.a.createElement("div",{class:"form-group"},o.a.createElement("label",{className:"my-labels checkbox-inline"},"Did you read it already? "),o.a.createElement("select",{name:"yes",class:"custom-select",id:"inputGroupSelect01"},o.a.createElement("option",{selected:!0},"Choose..."),o.a.createElement("option",{value:"yes"},"Yes"),o.a.createElement("option",{value:"no"},"Not yet, add to my whishlist!"))),o.a.createElement("div",{class:"container"},o.a.createElement("button",{type:"submit",href:"https://twitter.com/masuwa1018",class:"btn effect01",target:"_blank"},o.a.createElement("span",null,"ADD")))))):o.a.createElement(u.a,{to:"/sign-in"})}}]),a}(o.a.Component),k=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"logout"},o.a.createElement("button",{type:"button",onClick:this.props.onLogout},"Logout")),o.a.createElement("nav",{class:"nav"},o.a.createElement("ul",null,this.props.loggedInUser?o.a.createElement(o.a.Fragment,null,o.a.createElement("li",null,o.a.createElement(h.b,{className:"links",to:"/"},"MY BOOKS")),o.a.createElement("li",null,o.a.createElement(h.b,{className:"links",to:"/add-book"},"ADD BOOK")),o.a.createElement("li",null,o.a.createElement(h.b,{className:"links",to:"/search"},"SEARCH BOOKS"))):o.a.createElement(o.a.Fragment,null,o.a.createElement("li",null,o.a.createElement(h.b,{className:"links",to:"/sign-in"},"SIGNIN")),o.a.createElement("li",null,o.a.createElement(h.b,{className:"links",to:"/sign-up"},"SIGNUP"))))))}}]),a}(o.a.Component),v=a(57),w=a(11),D=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).state={book:[],showDescription:!1},e.handleDeletebook=function(){var t=e.props.match.params.id;b.a.delete("".concat(g,"/books/").concat(t)).then((function(a){console.log("deleted"),e.props.afterDelete(t)})).catch((function(e){console.log("error in delete")}))},e.handleDescription=function(t){e.setState({showDescription:t})},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;b.a.get("".concat(g,"/books/").concat(t)).then((function(t){var a=t.data;a.date=a.date.substring(0,10),e.setState({book:a})})).catch((function(e){console.log("nothing found")}))}},{key:"componentWillUnmount",value:function(){console.warn("component unmounted")}},{key:"render",value:function(){var e=this;if(!this.state.book)return o.a.createElement("div",{class:"spinner-grow",role:"status"},o.a.createElement("span",{class:"sr-only"},"Loading..."));console.log(this.state.book);var t=this.props.match.params.id;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"myDetail book-detail"},o.a.createElement("img",{style:{width:"21.5rem",borderRadius:"5px"},src:this.state.book.image}),o.a.createElement("div",{className:"book-detail-components"},o.a.createElement("h1",null," ",this.state.book.title),o.a.createElement("br",null),o.a.createElement("h2",null," ",this.state.book.author),o.a.createElement("h3",null,this.state.book.date),o.a.createElement("h4",null,this.state.book.category),this.state.book.alreadyRead?o.a.createElement("h4",{style:{color:"green"}}," \u2705"):o.a.createElement("h4",{style:{color:"brown"}},"You haven't read this book yet"),o.a.createElement("br",null),o.a.createElement("br",null),this.state.book.preview?o.a.createElement("a",{target:"_blank",style:{color:"white"},href:this.state.book.preview},o.a.createElement("button",{type:"submit",style:{position:"relative",width:"70%"},href:"https://twitter.com/masuwa1018",class:"btn effect01",target:"_blank"},"PREVIEW")):o.a.createElement("h3",null,"NO PREVIEW AVALIABLE"),o.a.createElement("a",null,o.a.createElement("button",{style:{position:"relative",width:"70%"},onClick:function(){e.handleDescription(!0)},type:"submit",href:"https://twitter.com/masuwa1018",class:"btn effect01",target:"_blank"},"Description")),this.state.showDescription?o.a.createElement(o.a.Fragment,null,o.a.createElement(w.a,{show:this.state.showDescription,onHide:function(){e.handleDescription(!1)}},o.a.createElement(w.a.Header,{closeButton:!0},o.a.createElement(w.a.Title,{style:{fontFamily:"Kameron"}},this.state.book.title," ")),o.a.createElement(w.a.Body,null,o.a.createElement("textarea",{style:{border:"none",fontFamily:"Helvetica",color:"#0C374D"},rows:"10",cols:"50"},this.state.book.description)),o.a.createElement(w.a.Footer,null))):"",o.a.createElement(h.b,{to:"/book/".concat(t,"/edit"),style:{margin:"0"}},o.a.createElement("button",{style:{position:"relative",width:"70%"},type:"submit",href:"https://twitter.com/masuwa1018",class:"btn effect01",target:"_blank"},"Edit")),o.a.createElement("a",null,o.a.createElement("button",Object(v.a)({style:{position:"relative",width:"70%"},onClick:this.handleDeletebook},"style",{backgroundColor:"brown",color:"white"}),"Delete"))),o.a.createElement("img",{style:{width:"21.5rem",borderRadius:"5px"},src:this.state.book.image})))}}]),a}(n.Component),x=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).state={book:""},e.handleEdit=function(t){t.preventDefault();var a=e.props.match.params.id,n=e.state.book,o=n.title,l=n.author,r=n.date,s=n.description,i=n.alreadyRead;console.log(s);var c={title:o,author:l,date:r,description:s,alreadyRead:i};b.a.patch("".concat(g,"/books/").concat(a),{title:o,author:l,date:r,description:s}).then((function(t){e.props.edit(a,c)}))},e.handleAuthorChange=function(t){t.preventDefault();var a=JSON.parse(JSON.stringify(e.state.book));a.author=t.target.value,e.setState({book:a})},e.handleTitleChange=function(t){t.preventDefault();var a=JSON.parse(JSON.stringify(e.state.book));a.title=t.target.value,e.setState({book:a})},e.handleDateChange=function(t){t.preventDefault();var a=JSON.parse(JSON.stringify(e.state.book));a.date=t.target.value,e.setState({book:a})},e.handleDescriptionChange=function(t){var a=JSON.parse(JSON.stringify(e.state.book));console.log(a.description,"original"),a.description=t.target.value,e.setState({book:a})},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;b.a.get("".concat(g,"/books/").concat(t)).then((function(t){console.log(t.data);var a=t.data;a.date=a.date.substring(0,10),e.setState({book:a})}))}},{key:"render",value:function(){var e=this.state.book,t=e.title,a=e.author,n=e.date,l=e.image,r=e.description;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"add1-book"},o.a.createElement("img",{style:{margin:"20px",height:"589px"},src:l}),o.a.createElement("form",{className:"edit-book myDetail",onSubmit:this.props.handleEdit},o.a.createElement("div",{class:"form-group"},o.a.createElement("label",{className:"my-labels",for:"title"},"Title"),o.a.createElement("input",{onChange:this.handleTitleChange,name:"title",type:"text",class:"form-control",id:"title","aria-describedby":"emailHelp",value:t})),o.a.createElement("div",{class:"form-group"},o.a.createElement("label",{className:"my-labels",for:"author"},"Author"),o.a.createElement("input",{onChange:this.handleAuthorChange,name:"author",type:"text",class:"form-control",id:"author",value:a})),o.a.createElement("div",{class:"form-group"},o.a.createElement("label",{className:"my-labels",for:"description"},"Description"),o.a.createElement("textarea",{onChange:this.handleDescriptionChange,name:"description",class:"form-control",id:"desription",value:r,rows:"5",cols:"10"})),o.a.createElement("div",{class:"form-group"},o.a.createElement("label",{className:"my-labels",for:"date"},"Date (Input needs to be valid date)"),o.a.createElement("input",{onChange:this.handleDateChange,name:"date",type:"text",class:"form-control",id:"date",value:n})),o.a.createElement("div",{class:"container"},o.a.createElement("button",{type:"submit",href:"https://twitter.com/masuwa1018",onClick:this.handleEdit,class:"btn effect01",target:"_blank"},o.a.createElement("span",null,"EDIT")))),o.a.createElement("img",{style:{margin:"20px",height:"589px"},src:l})))}}]),a}(o.a.Component);function S(e){return o.a.createElement("form",{className:"myDetail",onSubmit:e.onSignIn},o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"exampleInputEmail1"},"Email address"),o.a.createElement("input",{type:"email",className:"form-control",id:"exampleInputEmail1",name:"email","aria-describedby":"emailHelp"})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"exampleInputPassword1"},"Password"),o.a.createElement("input",{name:"password",type:"text",className:"form-control",id:"exampleInputPassword1"})),o.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit"))}function I(e){return o.a.createElement("form",{className:"myDetail",onSubmit:e.onSignUp},o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"exampleInputUsername"},"Username"),o.a.createElement("input",{type:"text",className:"form-control",id:"exampleInputUsername",name:"username"})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"exampleInputEmail1"},"Email address"),o.a.createElement("input",{type:"email",className:"form-control",id:"exampleInputEmail1",name:"email","aria-describedby":"emailHelp"}),o.a.createElement("small",{id:"emailHelp",className:"form-text text-muted"},"We'll never share your email with anyone else.")),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"exampleInputPassword1"},"Password"),o.a.createElement("input",{name:"password",type:"text",className:"form-control",id:"exampleInputPassword1"})),o.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit"))}a(91);var B=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).state={book:""},e}return Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{class:"search-box"},o.a.createElement("div",{class:"login-box"},o.a.createElement("h2",null,"Search"),o.a.createElement("form",{onSubmit:this.props.handleSearch},o.a.createElement("div",{class:"user-box"},o.a.createElement("input",{type:"text",name:"title",required:""}),o.a.createElement("label",{style:{color:"white"}},"Title")),o.a.createElement("div",{class:"user-box"},o.a.createElement("input",{type:"text",name:"author",required:""}),o.a.createElement("label",{style:{color:"white"}},"Author")),o.a.createElement("div",{class:"search-buttons"},o.a.createElement("div",{class:"container"},o.a.createElement("button",{type:"submit",href:"https://twitter.com/masuwa1018",class:"btn effect01",target:"_blank"},o.a.createElement("span",null,"Search"))))))))}}]),a}(o.a.Component),N=a(36),O=a(27),C=a(35),T=a(42),A=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).state={books:[],open:!1,show:!1,noInputs:!1,noBooksFound:!1,showDescription:!1},e.setShow=function(t,a){var n=Object(s.a)(e.state.books);n[a].show=t,e.setState({books:n})},e.handleModal=function(t){t.preventDefault();var a=Object(s.a)(e.state.books),n=a.findIndex((function(e){return t.target.book.value===e.title}));"yes"===t.target.yes.value?a[n].alreadyRead=!0:a[n].alreadyRead=!1;var o=a.filter((function(e){return e.title===t.target.book.value}));e.setState({books:a}),e.props.addToBookList(o[0])},e.handleDescription=function(t,a){var n=Object(s.a)(e.state.books);n[a].showDescription=t,n[a].wordForDescriptionButton=n[a].showDescription?"Minimize":"Show",e.setState({books:n,description:"Minimize"})},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.bookSearched,a=t.author,n=t.title;if(n||a){a=a.split(" ").join("+"),n=n.split(" ").join("+"),console.log(a,n);var o="https://www.googleapis.com/books/v1/volumes?q=inauthor:".concat(a,"+intitle:").concat(n,"&maxResults=40&key=AIzaSyD1sfSEZsI1Pktogx1OzMt4uDrgjY7oBeo");void 0!==a&&""!==a||(o="https://www.googleapis.com/books/v1/volumes?q=intitle:".concat(n,"&maxResults=40&key=AIzaSyD1sfSEZsI1Pktogx1OzMt4uDrgjY7oBeo")),void 0!==n&&""!==n||(o="https://www.googleapis.com/books/v1/volumes?q=inauthor:".concat(a,"&maxResults=40&key=AIzaSyD1sfSEZsI1Pktogx1OzMt4uDrgjY7oBeo")),console.log(o,"sssss"),b.a.get(o).then((function(t){if(console.log(t),0===t.data.totalItems)console.log("nothing found"),e.setState({noBooksFound:!0});else{for(var a=[],n=0;n<t.data.items.length;n++){var o="",l="";if(t.data.items[n].volumeInfo.title&&t.data.items[n].volumeInfo.authors){o=o=t.data.items[n].volumeInfo.title,l=t.data.items[n].volumeInfo.authors[0];var r="",s="";if(void 0!==t.data.items[n].volumeInfo.imageLinks){r=t.data.items[n].volumeInfo.imageLinks.thumbnail;var i="";if(t.data.items[n].volumeInfo.publishedDate&&(i=t.data.items[n].volumeInfo.publishedDate,void 0!==t.data.items[n].volumeInfo.categories)){s=t.data.items[n].volumeInfo.categories[0];var c="";if(t.data.items[n].volumeInfo.description){c=t.data.items[n].volumeInfo.description;var m="";t.data.items[n].volumeInfo.previewLink&&(m=t.data.items[n].volumeInfo.previewLink,a.push({title:o,image:r,author:l,description:c,publishedDate:i,category:s,preview:m,alreadyRead:!0,wordForDescriptionButton:"Show",showDescription:!1}))}}}}}Promise.all(a).then((function(t){e.setState({books:t})}))}})).catch((function(e){console.log("book not found",e)}))}else this.setState({noInputs:!0})}},{key:"render",value:function(){var e=this;return this.props.loggedInUser?(console.log(this.state.books),this.state.noInputs?o.a.createElement(u.a,{to:"/search"}):this.state.noBooksFound?o.a.createElement("h1",{className:"myDetail",style:{textAlign:"center",color:"brown"}},"Nothing found! ",o.a.createElement(h.b,{to:"/search"},"Try Again")):o.a.createElement(o.a.Fragment,null,o.a.createElement("span",{style:{backgroundColor:"rgba(42, 187, 155, 0.95)",padding:"7px",fontSize:"40px",fontFamily:"Kameron",color:"white"}},this.state.books.length," books found..."),o.a.createElement("div",{className:"myDetail results"},this.state.books.map((function(t,a){return t.inBookList=!1,t.urlForResults="url(".concat(t.image,")"),o.a.createElement("div",{key:a},o.a.createElement(O.a,{style:{width:"17rem",height:"460px",margin:"20px"}},o.a.createElement(O.a.Img,{variant:"top",style:{width:"100%",height:"265px"},src:t.image}),o.a.createElement(O.a.Body,{className:"card-body",style:{padding:"0"}},t.title.length<21?o.a.createElement(O.a.Title,{className:"card-components",style:{textAlign:"center",width:"100%"}},t.title):o.a.createElement(o.a.Fragment,null,o.a.createElement(T.a,{trigger:"click",key:"right",placement:"right",overlay:o.a.createElement(C.a,{id:"popover-positioned-right"},o.a.createElement(C.a.Title,{as:"h3"},"Title"),o.a.createElement(C.a.Content,null,o.a.createElement("strong",null,t.title)))},o.a.createElement("button",{style:{padding:"0",backgroundColor:"white",border:"none"}},o.a.createElement(O.a.Title,{className:"card-components",style:{textAlign:"center",width:"100%"}},t.title.substring(0,21)+"...")))),o.a.createElement(O.a.Text,{style:{width:"100%",textAlign:"center"}},t.author),o.a.createElement(O.a.Text,{className:"card-text card-components"},o.a.createElement("a",{target:"_blank",className:"card-components",style:{display:"block",textAlign:"center"},href:t.preview},"PREVIEW"),o.a.createElement("button",{style:{display:"block",width:"100%"},onClick:function(){e.handleDescription(!0,a)}},t.wordForDescriptionButton," Description"),t.showDescription?o.a.createElement(w.a,{show:t.showDescription,onHide:function(){e.handleDescription(!1,a)}},o.a.createElement(w.a.Header,{closeButton:!0},o.a.createElement(w.a.Title,{style:{fontFamily:"Kameron"}},t.title," ")),o.a.createElement(w.a.Body,null,o.a.createElement("textarea",{style:{border:"none",fontFamily:"Helvetica",color:"#0C374D"},rows:"10",cols:"50"},t.description)),o.a.createElement(w.a.Footer,null)):""),e.props.books.map((function(a){a.title===t.title&&a.user===e.props.loggedInUser._id&&(t.inBookList=!0)})),t.inBookList?o.a.createElement("h3",{style:{margin:"0",textAlign:"center",width:"100%",height:"64px",backgroundColor:"rgba(1, 152, 117, 1)",color:"white",position:"relative",borderRadius:"5px"}},"In BookList \u2713"):o.a.createElement(o.a.Fragment,null,o.a.createElement("button",{style:{position:"relative",width:"100%"},type:"submit",href:"https://twitter.com/masuwa1018",onClick:function(){e.setShow(!0,a)},class:"btn effect01",target:"_blank"},o.a.createElement("span",null,"ADD BOOK")),t.show&&o.a.createElement(w.a,{show:t.show,onHide:function(){e.setShow(!1,a)}},o.a.createElement(w.a.Header,{closeButton:!0},o.a.createElement(w.a.Title,null,"Choose a BookShelf")),o.a.createElement("form",{onSubmit:e.handleModal},o.a.createElement(w.a.Body,null,o.a.createElement("h3",null,"Did you read it already?"),o.a.createElement("select",{name:"yes",class:"custom-select",id:"inputGroupSelect01"},o.a.createElement("option",{selected:!0},"Choose..."),o.a.createElement("option",{value:"yes"},"Yes"),o.a.createElement("option",{value:"no"},"Not yet, add to my WishList!")),o.a.createElement("input",{hidden:!0,name:"book",value:t.title})),o.a.createElement(w.a.Footer,null,o.a.createElement("button",{style:{width:"100%"},type:"submit",href:"https://twitter.com/masuwa1018",class:"btn effect01",target:"_blank"},o.a.createElement("span",null,"ADD")),o.a.createElement(N.a,{variant:"secondary",onClick:function(){e.setShow(!1,a)}},"Close"))))))))}))))):o.a.createElement(u.a,{to:"/sign-in"})}}]),a}(o.a.Component),j=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).state={books:[],bookSearched:[],loggedInUser:null},e.getBooks=function(){b.a.get("".concat(g,"/books")).then((function(t){for(var a=0;a<t.data.length;a++)t.data[a].date?t.data[a].date=t.data[a].date.substring(0,10):t.data[a].date="no date available";console.log(t.data),e.setState({books:t.data})})).catch((function(e){console.log(e)}))},e.handleSignIn=function(t){t.preventDefault();var a=t.target.email.value,n=t.target.password.value;b.a.post("".concat(g,"/signin"),{email:a,password:n},{withCredentials:!0}).then((function(t){e.setState({loggedInUser:t.data},(function(){e.props.history.push("/")}))}))},e.handleSignUp=function(t){t.preventDefault();var a=t.target.email.value,n=t.target.username.value,o=t.target.password.value;b.a.post("".concat(g,"/signup"),{email:a,username:n,password:o},{withCredentials:!0}).then((function(t){e.setState({loggedInUser:t.data},(function(){e.props.history.push("/")}))}))},e.handleLogout=function(){console.log(document.cookie),b.a.post("".concat(g,"/logout"),{},{withCredentials:!0}).then((function(t){console.log(t),e.setState({loggedInUser:null},(function(){e.props.history.push("/")}))}))},e.handleAddBook=function(t){t.preventDefault();var a=t.target.name.value;console.log(a);var n=t.target.author.value,o=t.target.date.value,l=t.target.image.files[0],r=new FormData;r.append("imageUrl",l),console.log(l);var i=t.target.description.value,c=t.target.category.value,m="yes"===t.target.yes.value;b.a.post("".concat(g,"/upload"),r).then((function(t){console.log(t,"heo"),b.a.post("".concat(g,"/create"),{title:a,author:n,date:o.substring(0,10),image:t.data.image,description:i,alreadyRead:m,category:c,id:e.state.loggedInUser._id},{withCredentials:!0}).then((function(t){t.data.date=t.data.date.substring(0,10),e.setState({books:[].concat(Object(s.a)(e.state.books),[t.data])},(function(){e.props.history.push("/")}))}))}))},e.handleAddSearchedBook=function(t){var a=t.title,n=t.author,o=t.image,l=t.description,r=t.publishedDate.substring(0,10),i=t.category,c=t.alreadyRead,m=t.preview;console.log(t.alreadyRead),b.a.post("".concat(g,"/create"),{title:a,author:n,date:r,image:o,description:l,alreadyRead:c,category:i,preview:m,id:e.state.loggedInUser._id},{withCredentials:!0}).then((function(t){t.data.date=t.data.date.substring(0,10),e.setState({books:[].concat(Object(s.a)(e.state.books),[t.data])},(function(){e.props.history.push("/")}))}))},e.handleDelete=function(t){var a=Object(s.a)(e.state.books),n=a.findIndex((function(e){return e._id===t}));a.splice(n,1),e.setState({books:a},(function(){e.props.history.push("/")}))},e.handleSearch=function(t){t.preventDefault(),console.log(t.target.title.value),console.log(t.target.author.value);var a=t.target.title.value,n=t.target.author.value;e.setState({bookSearched:{title:a,author:n}},(function(){e.props.history.push("/search-results")}))},e.handleEdit=function(t,a){var n=a.title,o=a.author,l=a.date,r=a.description,i=Object(s.a)(e.state.books),c=i.findIndex((function(e){return e._id===t}));i[c].title=n,i[c].author=o,i[c].description=r,i[c].date=l,e.setState({books:i},(function(){e.props.history.push("/")}))},e}return Object(c.a)(a,[{key:"getUser",value:function(){var e=this;b.a.get("".concat(g,"/user"),{withCredentials:!0}).then((function(t){e.setState({loggedInUser:t.data})})).catch((function(e){}))}},{key:"componentDidMount",value:function(){var e=this;b.a.get("".concat(g,"/books")).then((function(t){e.setState({books:t.data})})),this.getBooks(),this.state.loggedInUser||this.getUser()}},{key:"render",value:function(){var e=this,t=this.state.loggedInUser;return console.log("user is ",t),o.a.createElement(o.a.Fragment,null,o.a.createElement("header",{className:"main-header"},o.a.createElement(k,{loggedInUser:t,onLogout:this.handleLogout,searchBooks:this.handleSearchBooks}),o.a.createElement("h1",null," ",o.a.createElement(h.b,{className:"main-title",to:"/"},"SHELFELY"))),o.a.createElement(u.d,null,o.a.createElement(u.b,{exact:!0,path:"/",render:function(){return o.a.createElement(f,{loggedInUser:t,books:e.state.books})}}),o.a.createElement(u.b,{path:"/add-book",render:function(){return o.a.createElement(y,{loggedInUser:t,onAdd:e.handleAddBook})}}),o.a.createElement(u.b,{exact:!0,path:"/book/:id",render:function(t){return o.a.createElement(D,Object.assign({afterDelete:e.handleDelete},t))}}),o.a.createElement(u.b,{path:"/book/:id/edit",render:function(t){return o.a.createElement(x,Object.assign({edit:e.handleEdit},t))}}),o.a.createElement(u.b,{path:"/sign-in",render:function(t){return o.a.createElement(S,Object.assign({onSignIn:e.handleSignIn},t))}}),o.a.createElement(u.b,{path:"/sign-up",render:function(t){return o.a.createElement(I,Object.assign({onSignUp:e.handleSignUp},t))}}),o.a.createElement(u.b,{exact:!0,path:"/search",render:function(t){return o.a.createElement(B,Object.assign({handleSearch:e.handleSearch},t))}}),o.a.createElement(u.b,{path:"/search-results",render:function(a){return o.a.createElement(A,Object.assign({books:e.state.books,loggedInUser:t,addToBookList:e.handleAddSearchedBook,bookSearched:e.state.bookSearched},a))}})))}}]),a}(o.a.Component),R=Object(u.g)(j);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(h.a,null,o.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[59,1,2]]]);
//# sourceMappingURL=main.bd86f305.chunk.js.map