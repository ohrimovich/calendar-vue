(function(){"use strict";var e={998:function(e,t,s){var n=s(144),i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("CalendarComponent")],1)},r=[],a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("CalendarContainer",[s("TitleCalendar"),s("CalendarHeader",{attrs:{year:this.year,month:this.month,weeks:this.weeks,weekIndex:this.weekIndex,days:this.days,dayIndex:this.dayIndex,isMonthActive:this.isMonthActive,isWeekActive:this.isWeekActive,isDayActive:this.isDayActive},on:{incrementClick:e.incrementMonth,decrementClick:e.decrementMonth,todayClick:e.todayClick,monthClick:e.showMonth,weekClick:e.showWeek,dayClick:e.showDay}}),s("CalendarBorder",[e.isMonthActive?[s("WeekDays",{attrs:{isMonthActive:this.isMonthActive,isWeekActive:this.isWeekActive}}),s("MonthContent",{attrs:{days:this.days,day:this.currentDay,weeks:this.weeks,month:this.month,year:this.year,eventsArr:this.eventsArr},on:{showModal:e.showModal}})]:e._e(),e.isWeekActive?[s("WeekContent",{attrs:{isMonthActive:this.isMonthActive,isWeekActive:this.isWeekActive,currentDay:this.currentDay,month:this.month,weeks:this.weeks,year:this.year,weekIndex:this.weekIndex,eventsArr:this.eventsArr},on:{showModal:e.showModal}})]:e._e(),e.isDayActive?[s("DayContent",{attrs:{days:this.days,dayIndex:this.dayIndex,eventsArr:this.eventsArr,currentDay:this.currentDay,year:this.year,month:this.month},on:{showModal:e.showModal}})]:e._e()],2)],1),s("EventModal",{directives:[{name:"show",rawName:"v-show",value:e.isModalVisible,expression:"isModalVisible"}],on:{closeModal:e.closeModal,getEventTime:e.createEvent}})],1)},o=[],h=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container"},[e._t("default")],2)},c=[],l=s(736),u={},d=(0,l.Z)(u,h,c,!1,null,"84455fba",null),m=d.exports,y=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("h1",[e._v("Vue Calendar")])},v=[],k={},p=(0,l.Z)(k,y,v,!1,null,null,null),w=p.exports,f=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"header"},[s("div",{staticClass:"actions"},[s("div",{staticClass:"left"},[s("ButtonComponent",{nativeOn:{click:function(t){return e.$emit("todayClick")}}},[e._v("Today")]),s("ButtonComponent",{nativeOn:{click:function(t){return e.$emit("decrementClick")}}},[e._v("Back")]),s("ButtonComponent",{nativeOn:{click:function(t){return e.$emit("incrementClick")}}},[e._v("Next")])],1),s("div",{staticClass:"right"},[s("ButtonComponent",{class:{isActive:e.isMonthActive},nativeOn:{click:function(t){return e.$emit("monthClick")}}},[e._v("Month")]),s("ButtonComponent",{class:{isActive:e.isWeekActive},nativeOn:{click:function(t){return e.$emit("weekClick")}}},[e._v("Week")]),s("ButtonComponent",{class:{isActive:e.isDayActive},nativeOn:{click:function(t){return e.$emit("dayClick")}}},[e._v("Day")])],1)]),s("div",{staticClass:"header__title-wrapper"},[s("h3",{staticClass:"header-title",attrs:{year:e.year}},[e._v(e._s(e.setTitle()))])])])},C=[],D=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("button",{staticClass:"button",attrs:{type:e.type}},[e._t("default")],2)},A=[],b={name:"ButtonComponent",props:{type:{type:String,default:"button"}}},g=b,_=(0,l.Z)(g,D,A,!1,null,"85f5bce2",null),M=_.exports,x={name:"CalendarHeader",components:{ButtonComponent:M},props:{month:Number,year:Number,weeks:Array,weekIndex:Number,decrementClick:Function,incrementClick:Function,isMonthActive:Boolean,isWeekActive:Boolean,isDayActive:Boolean,days:Array,dayIndex:Number},data(){return{months:["January","February","March","April","May","June","July","August","September","October","November","December"]}},computed:{currentWeek(){return this.weeks[this.weekIndex]}},methods:{setTitle(){if(this.isMonthActive)return`${this.months[this.month]} ${this.year}`;if(this.isWeekActive){let e=this.currentWeek[0],t=this.currentWeek[this.currentWeek.length-1];return`${e.monthDay} - ${t.monthDay}`}if(this.isDayActive){let e=this.days[this.dayIndex],t=new Date(this.year,this.month,e.numberDay).toLocaleDateString("en",{weekday:"long"}),s=e.monthDay;return`${t} ${s}`}}}},I=x,N=(0,l.Z)(I,f,C,!1,null,"9b4038a0",null),W=N.exports,T=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",{staticClass:"calendar-content"},[e._t("default")],2)},$=[],E={},H=E,O=(0,l.Z)(H,T,$,!1,null,"19a9eacc",null),B=O.exports,S=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[e.isMonthActive?s("div",{staticClass:"weekdays",attrs:{month:e.month,weeks:e.weeks}},e._l(e.day,(function(t){return s("div",{key:t,staticClass:"weekdays-item",class:{weekView:e.isWeekActive}},[e._v(" "+e._s(t)+" ")])})),0):e._e(),e.isWeekActive?s("div",{staticClass:"weekdays",attrs:{month:e.month,weeks:e.weeks}},e._l(e.currentWeek,(function(t){return s("div",{key:t.numberDay,staticClass:"weekdays-item",class:{weekView:e.isWeekActive}},[e._v(" "+e._s(t.dayDate)+" ")])})),0):e._e()])},Z=[],L={props:{month:Number,weeks:Array,isWeekActive:Boolean,isMonthActive:Boolean,weekIndex:Number},data(){return{day:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]}},computed:{date(){if(this.isWeekActive){let e=this.month;return e+=1,e<10?"/0"+e:"/"+e}return""},currentWeek(){if(this.isWeekActive){let e=this.weekIndex;const t=this.weeks,s=t[e];return s}return[]}}},V=L,F=(0,l.Z)(V,S,Z,!1,null,"666ab4dd",null),j=F.exports,P=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"days"},e._l(e.weeks.length,(function(t,n){return s("div",{key:n,staticClass:"week",attrs:{days:e.days,weeks:e.weeks}},e._l(e.weeks[n],(function(t){return s("div",{key:t.numberDay,staticClass:"day",class:{current:e.day===t.numberDay&&e.month===e.currentMonth},attrs:{day:e.day,month:e.month,year:e.year},on:{click:function(s){return e.$emit("showModal",t.numberDay,e.month,e.year)}}},[s("span",{staticClass:"day-number",class:{lightGray:!t.inCurrentMonthDay}},[e._v(e._s(t.numberDay)+" ")]),e._l(e.eventsArr,(function(n){return s("div",{key:n.startTime,attrs:{eventsArr:e.eventsArr}},[e.getClickedDay(t.numberDay,e.month,e.year)===n.day?s("span",{staticClass:"event"},[e._v(e._s(n.startTime))]):e._e()])}))],2)})),0)})),0)},q=[],J={props:{days:Array,day:Number,weeks:Array,month:Number,year:Number,eventsArr:Array},data(){return{currentMonth:(new Date).getMonth()}},computed:{},methods:{getClickedDay(e,t,s){return""+(e+"/"+t+"/"+s)}}},Y=J,G=(0,l.Z)(Y,P,q,!1,null,"7740af9f",null),U=G.exports,z=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"weekdays-wrapper"},[s("div",{staticClass:"padding-block"},[e._v("00:00")]),s("WeekDays",{staticClass:"weekdays",attrs:{month:e.month,weeks:e.weeks,year:e.year,weekIndex:e.weekIndex,isWeekActive:e.isWeekActive}})],1),s("div",{staticClass:"hours-wrapper"},[s("div",{staticClass:"hours-item"},e._l(e.hours,(function(t){return s("div",{key:t,staticClass:"hours padding-block",class:{now:t===e.isNowHour},domProps:{innerHTML:e._s(t)}})})),0),s("div",{staticClass:"days"},[s("TimeLine",{style:{top:60+(this.hours<1?this.isNowMin:60*this.hour+this.isNowMin)+"px"}}),e._l(e.weeks[e.weekIndex],(function(t,n){return s("div",{key:n,staticClass:"day-week",class:{current:e.currentDay===t.numberDay&&e.month===e.currentMonth},attrs:{eventsArr:e.eventsArr,currentDay:e.currentDay},on:{click:function(s){return e.$emit("showModal",t.numberDay,e.month,e.year)}}},e._l(e.hours,(function(n){return s("div",{key:n,staticClass:"day-hours hours padding-block",class:{isNow:n===e.isNowHour}},[s("span",{staticClass:"day-hours-fill"},[e._v(e._s(n))]),s("div",{staticClass:"hours-content"},[s("div",{staticClass:"event-list"},e._l(e.eventsArr,(function(i){return s("div",{key:i.startTime},[t.clickDateCheck===i.day&&e.compareStringHours(n,i.startTime,i.timeAsNumber)?s("div",{staticClass:"event",style:{height:59*i.timeAsNumber+"px"}},[s("span",[e._v(e._s(i.startTime))])]):e._e()])})),0)])])})),0)}))],2)])])},K=[],Q=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},R=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"wrapper"},[s("div",{staticClass:"marker"}),s("div",{staticClass:"line"})])}],X={name:"TimeLine"},ee=X,te=(0,l.Z)(ee,Q,R,!1,null,"51872f74",null),se=te.exports,ne={name:"WeekContent",props:{month:Number,weeks:Array,year:Number,currentDay:Number,isWeekActive:Boolean,weekIndex:Number,eventsArr:Array},components:{WeekDays:j,TimeLine:se},mounted(){this.getHours()},data(){return{hours:["all&nbsp;day","00:00","01:00","02:00","03:00","04:00","05:00","06:00","07:00","08:00","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00","23:00"],isNowHour:"",hour:(new Date).getHours(),isNowMin:0,heightIndexOfEvent:1,currentMonth:(new Date).getMonth()}},methods:{compareStringHours(e,t,s){return this.heightIndexOfEvent=s,e.slice(0,2)===t.slice(0,2)},getHours(){const e=new Date,t=e.getHours().toString().length<2?"0"+e.getHours():e.getHours(),s=e.getMinutes();this.isNowHour=`${t}:00`,this.isNowMin=s}}},ie=ne,re=(0,l.Z)(ie,z,K,!1,null,"58e808ab",null),ae=re.exports,oe=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{days:e.days,dayIndex:e.dayIndex,eventsArr:e.eventsArr,month:e.month,year:e.year,currentDay:e.currentDay}},[s("div",{staticClass:"weekdays-wrapper"},[s("div",{staticClass:"padding-block"},[s("p",{staticClass:"day-date"},[e._v(e._s(e.days[e.dayIndex].dayDate))])])]),s("div",{staticClass:"hours-wrapper"},[s("div",{staticClass:"hours-item"},e._l(e.hours,(function(t){return s("div",{key:t,staticClass:"hours padding-block",class:{now:t===e.isNowHour},domProps:{innerHTML:e._s(t)}})})),0),s("div",{staticClass:"day-wrapper"},[s("div",{staticClass:"day",class:{current:e.currentDay===e.days[e.dayIndex].numberDay&&e.month===e.currentMonth}},[s("TimeLine",{style:{top:60+(this.hours<1?this.isNowMin:60*this.hour+this.isNowMin)+"px"}}),e._l(e.hours,(function(t){return s("div",{key:t,staticClass:"day-hours hours padding-block",on:{click:function(t){return e.$emit("showModal",e.days[e.dayIndex].numberDay,e.month,e.year)}}},[s("span",{staticClass:"day-hours-fill"},[e._v(e._s(t))]),s("div",{staticClass:"hours-content"},[s("div",{staticClass:"event-list"},e._l(e.eventsArr,(function(n){return s("div",{key:n.startTime},[e.days[e.dayIndex].clickDateCheck===n.day&&e.compareStringHours(t,n.startTime,n.timeAsNumber)?s("div",{staticClass:"event",style:{height:59*n.timeAsNumber+"px"}},[s("span",[e._v(e._s(n.startTime))])]):e._e()])})),0)])])}))],2)])])])},he=[],ce={name:"DayContent",components:{TimeLine:se},mounted(){this.getHours()},props:{days:Array,dayIndex:Number,month:Number,year:Number,eventsArr:Array,currentDay:Number},data(){return{hours:["all&nbsp;day","00:00","01:00","02:00","03:00","04:00","05:00","06:00","07:00","08:00","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00","23:00"],currentMonth:(new Date).getMonth(),isNowHour:"",hour:(new Date).getHours(),isNowMin:0}},methods:{compareStringHours(e,t,s){return this.heightIndexOfEvent=s,e.slice(0,2)===t.slice(0,2)},getHours(){const e=new Date,t=e.getHours().toString().length<2?"0"+e.getHours():e.getHours(),s=e.getMinutes();this.isNowHour=`${t}:00`,this.isNowMin=s}}},le=ce,ue=(0,l.Z)(le,oe,he,!1,null,"b6ee508a",null),de=ue.exports,me=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("transition",{attrs:{name:"modal-fade"}},[s("div",{staticClass:"modal-backdrop"},[s("form",{staticClass:"modal"},[s("header",{staticClass:"modal-header"},[e._t("header",(function(){return[s("h5",[e._v(" Create event ")]),s("button",{staticClass:"btn-close btn-right",attrs:{type:"button"},on:{click:function(t){return e.$emit("closeModal")}}})]}))],2),s("section",{staticClass:"modal-body"},[s("div",{staticClass:"fields"},[s("div",{staticClass:"input"},[s("label",{attrs:{for:"input"}},[e._v("Date")]),s("input",{attrs:{placeholder:"",for:"date",type:"date",required:"",id:"date"}})]),s("div",{staticClass:" input group"},[s("label",[e._v("Times")]),s("div",{staticClass:"input"},[s("label",{attrs:{for:"startTime"}},[e._v("Start Time")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.start,expression:"start"}],attrs:{placeholder:"Start time",type:"time",required:"",id:"startTime"},domProps:{value:e.start},on:{input:function(t){t.target.composing||(e.start=t.target.value)}}})]),s("div",{staticClass:"input"},[s("label",{attrs:{for:"endTime"}},[e._v("End Time")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.end,expression:"end"}],attrs:{placeholder:"End time",type:"time",required:"",id:"endTime"},domProps:{value:e.end},on:{input:function(t){t.target.composing||(e.end=t.target.value)}}})])])])]),s("footer",{staticClass:"modal-footer"},[e._t("footer",(function(){return[s("button",{staticClass:"btn btn-green",attrs:{type:"button"},on:{click:e.getEventTime}},[e._v(" Create ")])]}))],2)])])])},ye=[],ve={data(){return{start:null,end:null}},methods:{getEventTime(){this.$emit("getEventTime",{startTime:this.start,startTimeAsNumber:Number(this.start.replace(":","")),timeAsNumber:(Number(this.end.replace(":",""))-Number(this.start.replace(":","")))/100,endTime:this.end})}}},ke=ve,pe=(0,l.Z)(ke,me,ye,!1,null,"20cbbb78",null),we=pe.exports,fe={name:"CalendarComponent",components:{CalendarContainer:m,TitleCalendar:w,CalendarHeader:W,CalendarBorder:B,WeekDays:j,MonthContent:U,WeekContent:ae,DayContent:de,EventModal:we},mounted(){this.weekIndex=this.getCurrentWeekIndex()},data(){return{month:(new Date).getMonth(),year:(new Date).getFullYear(),currentDay:(new Date).getDate(),isMonthActive:!0,isWeekActive:!1,isDayActive:!1,isModalVisible:!1,clickedDay:"",eventsArr:[],weekIndex:0,dayIndex:(new Date).getDate()+1}},computed:{firstDayIndex(){return new Date(this.year,this.month,1).getUTCDay()},days(){const e=[],t=this.daysInMonth(this.year,this.month-1);for(let s=t;s>t-this.firstDayIndex;s-=1)e.unshift(this.createDay(s,this.year,this.month-1,!1));for(let s=0;s<this.daysInMonth(this.year,this.month);s+=1)e.push(this.createDay(s+1,this.year,this.month));for(let s=0;s<6-(this.daysInMonth(this.year,this.month)+this.firstDayIndex+1)%10;s+=1)e.push(this.createDay(s+1,this.year,this.month+1,!1));return e},weeks(){let e=this.days,t=7,s=[];for(let n=0;n<Math.ceil(e.length/t);n++)s[n]=e.slice(n*t,n*t+t);return s}},methods:{daysInMonth(e,t){return new Date(e,t+1,0).getDate()},createDay(e,t,s,n=!0){return{numberDay:e,dayDate:`${new Date(t,s,e).toLocaleDateString("en",{weekday:"short"})} ${e<10?"0"+e:e}/${s+1<10?"0"+(s+1):s+1}`,monthDay:`${new Date(t,s,e).toLocaleDateString("en",{month:"short"})} ${e}`,clickDateCheck:""+(e+"/"+s+"/"+t),inCurrentMonthDay:n}},incrementMonth(){this.isMonthActive?(this.month+=1,this.month>11&&(this.month=-1,this.month+=1,this.year+=1)):this.isWeekActive?(this.weekIndex+=1,this.weeks.length-1===this.weekIndex&&(this.month+=1,this.weekIndex=0)):this.isDayActive&&(this.dayIndex+=1,this.days.length-1===this.dayIndex&&(this.month+=1,this.dayIndex=0))},decrementMonth(){this.isMonthActive?(this.month-=1,this.month<0&&(this.month=12,this.month-=1,this.year-=1)):this.isWeekActive?(this.weekIndex-=1,this.weekIndex<=0&&(this.month-=1,this.weekIndex=this.getNumberOfWeeks()-1,this.month<0&&(this.month=12,this.month-=1,this.year-=1,this.weekIndex=this.getNumberOfWeeks()-1))):this.isDayActive&&(this.dayIndex-=1,this.dayIndex<0&&(this.month-=1,this.dayIndex=this.days.length-1))},getNumberOfWeeks(){let e=new Date(this.year,this.month+1,0);return Math.ceil((e.getDate()-(e.getDay()?e.getDay():7))/7)+1},getCurrentWeekIndex(){for(let e=0;e<this.weeks.length;e+=1)for(let t=0;t<this.weeks[e].length;t+=1)if(this.weeks[e][t].numberDay===this.currentDay)return e},getCurrentDate(){this.month=(new Date).getMonth(),this.year=(new Date).getFullYear()},todayClick(){this.isMonthActive?this.getCurrentDate():this.isWeekActive?(this.getCurrentDate(),this.weekIndex=this.getCurrentWeekIndex()):this.isDayActive&&(this.getCurrentDate(),this.dayIndex=(new Date).getDate()+1)},showMonth(){this.isMonthActive=!0,this.isWeekActive=!1,this.isDayActive=!1},showWeek(){this.isMonthActive=!1,this.isWeekActive=!0,this.isDayActive=!1},showDay(){this.isMonthActive=!1,this.isWeekActive=!1,this.isDayActive=!0},showModal(e,t,s){this.clickedDay=""+(e+"/"+t+"/"+s),this.isModalVisible=!0},closeModal(){this.isModalVisible=!1},createEvent(e){return this.closeModal(),e?(this.eventsArr.push({day:this.clickedDay,startTime:e.startTime,timeAsNumber:e.timeAsNumber,startTimeAsNumber:e.startTimeAsNumber}),this.eventsArr.sort(((e,t)=>e.startTimeAsNumber-t.startTimeAsNumber)),this.eventsArr):this.eventsArr}}},Ce=fe,De=(0,l.Z)(Ce,a,o,!1,null,null,null),Ae=De.exports,be={name:"App",components:{CalendarComponent:Ae}},ge=be,_e=(0,l.Z)(ge,i,r,!1,null,null,null),Me=_e.exports;n.Z.config.productionTip=!1,new n.Z({render:e=>e(Me)}).$mount("#app")}},t={};function s(n){var i=t[n];if(void 0!==i)return i.exports;var r=t[n]={exports:{}};return e[n](r,r.exports,s),r.exports}s.m=e,function(){var e=[];s.O=function(t,n,i,r){if(!n){var a=1/0;for(l=0;l<e.length;l++){n=e[l][0],i=e[l][1],r=e[l][2];for(var o=!0,h=0;h<n.length;h++)(!1&r||a>=r)&&Object.keys(s.O).every((function(e){return s.O[e](n[h])}))?n.splice(h--,1):(o=!1,r<a&&(a=r));if(o){e.splice(l--,1);var c=i();void 0!==c&&(t=c)}}return t}r=r||0;for(var l=e.length;l>0&&e[l-1][2]>r;l--)e[l]=e[l-1];e[l]=[n,i,r]}}(),function(){s.d=function(e,t){for(var n in t)s.o(t,n)&&!s.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};s.O.j=function(t){return 0===e[t]};var t=function(t,n){var i,r,a=n[0],o=n[1],h=n[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(i in o)s.o(o,i)&&(s.m[i]=o[i]);if(h)var l=h(s)}for(t&&t(n);c<a.length;c++)r=a[c],s.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return s.O(l)},n=self["webpackChunkcalendar_vue"]=self["webpackChunkcalendar_vue"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=s.O(void 0,[998],(function(){return s(998)}));n=s.O(n)})();
//# sourceMappingURL=app.563a18b3.js.map