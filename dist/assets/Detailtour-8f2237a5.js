import{u as w}from"./getimage-590949bd.js";import{_ as T,C,a as y,D as V,r as g,t as x,o as l,c as d,d as t,h as m,j as k,n as i,l as c,v as u,i as r,k as p}from"./index-e4697372.js";const D={setup(){const e=C(),s=e.params.id,_=y({loading:!0,opensend:!1,tabs:"tab1"}),o=y({name_customer:"",phone_customer:"",cmt_customer:"",date_customer:"",id_tour:s}),h=V(),{getimage:v}=w(),a=g({});(()=>{axios.get(`https://huanapi.000webhostapp.com/api/tour/${s}`).then(n=>{setTimeout(()=>{_.loading=!1},1e3),a.value=n.data.tour}).catch(n=>{})})();const f=g({});return{router:h,err_customer:f,addcustomer:()=>{const n=new FormData;n.append("name_customer",o.name_customer),n.append("phone_customer",o.phone_customer),n.append("cmt_customer",o.cmt_customer),n.append("date_customer",o.date_customer),n.append("id_tour",o.id_tour),axios.post("https://huanapi.000webhostapp.com/api/customer",n).then(b=>{o.name_customer="",o.phone_customer="",o.cmt_customer="",o.date_customer="",h.push({name:"thankyou"})}).catch(b=>{f.value=b.response.data.errors})},getimage:v,tour:a,route:e,...x(_),...x(o)}}},M={key:0,class:"loader"},H=t("div",null,[t("img",{src:"https://huanapi.000webhostapp.com/image/loading.gif",alt:""})],-1),L=[H],N={key:1,class:"max-w-[1230px] mx-auto px-[15px] mb-3"},U={class:""},S={class:"text-primary uppercase font-medium text-xl"},B={class:"my-2 text-xl"},R={class:"mx-3 translate-y-9 lg:translate-y-7 animate-send"},j={class:"max-w-[510px] rounded-xl bg-white mx-auto p-4 sm:p-7"},G=t("div",{class:"text-center text-primary text-[20px] font-medium"},"Thông tin liên hệ",-1),q={class:"auth_form my-5 sm:my-7"},z=t("i",{class:"fa-solid fa-circle-user icon_input"},null,-1),E={key:0,class:"-my-5 text-error p-1"},F=t("i",{class:"fa-solid fa-circle-exclamation mx-2"},null,-1),I={class:"auth_form my-5 sm:my-7"},A=t("i",{class:"fa-solid fa-phone-volume icon_input"},null,-1),J={key:1,class:"-my-5 text-error p-1"},K=t("i",{class:"fa-solid fa-circle-exclamation mx-2"},null,-1),O={class:"auth_form my-5 sm:my-7"},P=t("i",{class:"fa-solid fa-credit-card icon_input"},null,-1),Q={key:2,class:"-my-5 text-error p-1"},W=t("i",{class:"fa-solid fa-circle-exclamation mx-2"},null,-1),X={class:"auth_form my-5 sm:my-7"},Y=t("i",{class:"fa-solid fa-calendar-days icon_input"},null,-1),Z={key:3,class:"-my-5 text-error p-1 mb-2"},$=t("i",{class:"fa-solid fa-circle-exclamation mx-2"},null,-1),tt={class:"flex justify-end"},et=t("div",{class:"mr-3"},[t("button",{type:"submit",class:"btn_send bg-primary"},"Gửi")],-1),st=t("div",{class:"btn_send bg-hover-primary"},"Hủy",-1),ot=[st],at={class:"flex py-3 flex-wrap"},nt=t("i",{class:"fa-solid fa-umbrella"},null,-1),it=t("i",{class:"fa-solid fa-car-side"},null,-1),rt=t("i",{class:"fa-solid fa-camera"},null,-1),lt=["innerHTML"],dt=["innerHTML"],mt=["src"];function ct(e,s,_,o,h,v){return e.loading?(l(),d("div",M,L)):(l(),d("div",N,[t("div",U,[t("p",S,m(o.tour.name_tour),1),t("p",B,"Giá tour gốc/khách: "+m(o.tour.price)+" VNĐ",1),t("div",null,[t("button",{class:"py-2 px-7 bg-primary text-white rounded-md hover:bg-hover-primary transition-all",onClick:s[0]||(s[0]=a=>e.opensend=!e.opensend)},"Đặt Ngay"),t("form",{onSubmit:s[8]||(s[8]=k(a=>o.addcustomer(),["prevent"]))},[t("div",{class:i([{active_send:e.opensend},"send_infor fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.5)] hidden animate-overlay"]),onClick:s[7]||(s[7]=k(a=>e.opensend=!e.opensend,["self"]))},[t("div",R,[t("div",j,[G,t("div",q,[z,c(t("input",{type:"text",placeholder:"Tên của bạn",class:"flex-1","onUpdate:modelValue":s[1]||(s[1]=a=>e.name_customer=a)},null,512),[[u,e.name_customer]])]),o.err_customer.name_customer?(l(),d("div",E,[F,r(m(o.err_customer.name_customer[0]),1)])):p("",!0),t("div",I,[A,c(t("input",{type:"text",placeholder:"Số điện thoại",class:"flex-1","onUpdate:modelValue":s[2]||(s[2]=a=>e.phone_customer=a)},null,512),[[u,e.phone_customer]])]),o.err_customer.phone_customer?(l(),d("div",J,[K,r(m(o.err_customer.phone_customer[0]),1)])):p("",!0),t("div",O,[P,c(t("input",{type:"text",placeholder:"Số chứng minh thư nhân dân",class:"flex-1","onUpdate:modelValue":s[3]||(s[3]=a=>e.cmt_customer=a)},null,512),[[u,e.cmt_customer]])]),o.err_customer.cmt_customer?(l(),d("div",Q,[W,r(m(o.err_customer.cmt_customer[0]),1)])):p("",!0),t("div",X,[Y,c(t("input",{type:"date",class:"flex-1","onUpdate:modelValue":s[4]||(s[4]=a=>e.date_customer=a)},null,512),[[u,e.date_customer]])]),o.err_customer.date_customer?(l(),d("div",Z,[$,r(m(o.err_customer.date_customer[0]),1)])):p("",!0),c(t("input",{type:"text",class:"flex-1 border","onUpdate:modelValue":s[5]||(s[5]=a=>e.id_tour=a),hidden:""},null,512),[[u,e.id_tour]]),t("div",tt,[et,t("div",{class:"cursor-pointer",onClick:s[6]||(s[6]=a=>e.opensend=!e.opensend)},ot)])])])],2)],32)])]),t("div",at,[t("div",{class:i([{active:e.tabs==="tab1"},"detail_tour mr-2 sm:mr-7 p-2"]),onClick:s[9]||(s[9]=a=>e.tabs="tab1")},[nt,r(" Thông tin ")],2),t("div",{class:i([{active:e.tabs==="tab2"},"detail_tour mr-2 sm:mr-7 px-2 p-2"]),onClick:s[10]||(s[10]=a=>e.tabs="tab2")},[it,r(" Tổng quan ")],2),t("div",{class:i([{active:e.tabs==="tab3"},"detail_tour p-2"]),onClick:s[11]||(s[11]=a=>e.tabs="tab3")},[rt,r(" Lộ trình ")],2)]),t("div",{class:i(["content_tab hidden animate-overlay",{active:e.tabs==="tab1"}])},[t("div",{innerHTML:o.tour.infor},null,8,lt)],2),t("div",{class:i(["content_tab hidden animate-overlay",{active:e.tabs==="tab2"}])},[t("div",{innerHTML:o.tour.about},null,8,dt)],2),t("div",{class:i(["content_tab hidden animate-overlay",{active:e.tabs==="tab3"}])},[t("img",{src:o.getimage(o.tour.map),alt:""},null,8,mt)],2)]))}const vt=T(D,[["render",ct]]);export{vt as default};
