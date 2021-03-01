	var index=0;
	var closetoggle=0;
	var box_1=document.getElementById('box-1');
	var radiotoggle=0;
	var selectoogle=0;
	function add()
	{
               if(selectoogle==1)
               {
               	   closeselect();
               	   selectoogle=0;
               }
               if(radiotoggle==1)
               {
               	closeradio();
               	radiotoggle=0;
               }
		var selectuserinp=document.getElementById('opt').value;
		if(selectuserinp=='radio')
		{
			var radlabl="rad"+index;
			var radinp='radinps'+index;
			var radbtn='radbtns'+index;
			var radsuserinp='raduser'+index;
			var spanradio='radiospan'+index;
			 var box_1=document.getElementById('box-1');
			 var closingids="spanclsoe"+index;
			 box_1.innerHTML+=`<div class="user-radio common-cls" id=${closingids}>
			   <span class="label1" id='${radlabl}'>Name:</span><input type="text" name="" class="inputs-1" id=${radinp}><button class="input-1btn" id='${radbtn}' onclick=Add(${radlabl},${radinp},${radbtn})>Add</button>
               <input type="text" name="" class="inputs-2 " id=${radsuserinp}><button  class='radiocls'id="input-radios" onclick=addRadio(${radsuserinp},${radlabl},${spanradio})>Add</button>
               <span id=${spanradio} ></span>
               <span id="close" class='closing' onclick=closingDiv(${closingids})>&times;</span><div>`
               index++;


		}
		else if(selectuserinp=='select')
		{ 
			console.log(selectoogle);
                var sellblid='lbl'+index;
                var selinp='inp'+index;
                var selbtn='btn'+index;
                var seluniqid='selc'+index;
                var selcids='select'+index;
                  var closingids="spanclsoe"+index;
               var box_1=document.getElementById('box-1');
               box_1.innerHTML+=`<div class="user-select common-cls" id=${closingids}>
				<span class="label1" id=${sellblid}>Name:</span><input type="text" name="" class="inputs-1" id=${selinp}><button class="input-1btn" id=${selbtn} onclick=Add(${sellblid},${selinp},${selbtn})>Add</button>
				<input type="text" name=""id='${seluniqid}' class="collectuserinp"><button  class='closesel' id="input-selc" onclick=AddSelc(${seluniqid},${selcids})>Add</button>
				<select id="${selcids}" class='userselectsec collectinps'>
					
					
				</select>
				 <span id="close" class='closing' onclick=closingDiv(${closingids})>&times;</span>

			</div>`;
			index++;
			selectoogle=1;
		}
		else if(selectuserinp=="submit")
		{
			alert("submit here")
			var closingsoon=document.getElementsByClassName('closing');
			for(var t=0;t<closingsoon.length;t++)
                {
                	closingsoon[t].style.display="none";
                }


             var submitquid='submit1';
        var box_1=document.getElementById('box-1');
        box_1.innerHTML+=`<div class="submit">
				<button id="submitval1">Submit Query</button>
			</div>`;
			document.getElementById('submitval1').onclick=function()
			{
				submitform();
			}

		}
		else
		    {
				var inpid="inp"+index;
var labelid='lbl'+index;
var btnid='btn'+index;
var box_1=document.getElementById('box-1');
var closingids="spanclsoe"+index;
console.log(inpid)
box_1.innerHTML+=`<div class="user-input common-cls" id=${closingids}>
			<span class="label1" id=${labelid}>Name:</span><input type="text" name="" class="inputs-1" id=${inpid}><button class="input-1btn" id="${btnid}" onclick=Add(${labelid},${inpid},${btnid})>Add</button><input type="text" name="" class="inputs-2-1 collectinps" placeholder='${selectuserinp}' ><span id="close" class='closing'onclick=closingDiv(${closingids})>&times;</span>
			</div>`
			index++;

		}
	}

function closingDiv(clsids)
{
	clsids.style.display="none";
}
function submitform()
{

	alert("hello i ma submiting")
	var elem=document.querySelector('#box-1');

var clone=elem.cloneNode(true);
clone.id='d3';
clone.lastElementChild.addEventListener('click',function()
{
	
	collectdata();


})
elem.after(clone);
elem.replaceWith(elem.cloneNode(true));

}
function collectdata()
{
	alert('collecting data');
	const valarray=[];
	const  spanarray=[];
 var lblist=document.querySelectorAll('#d3 .label1');
  var inplist=document.querySelectorAll('#d3 .collectinps');
  for(var k=0;k<lblist.length;k++)
  {
  	spanarray.push(lblist[k].innerText);
  }
  for(var i=0;i<inplist.length;i++)
  {
      if(inplist[i].type=='radio')
      {
      	if(inplist[i].checked)
     		{
     			valarray.push(inplist[i].value);
     		}
      	
      }	
      else
      {
      	valarray.push(inplist[i].value);
      }
  }
  console.log(valarray);
  console.log(spanarray);
    var finalapge=document.getElementsByClassName('final')[0]; 
  for(var m=0;m<spanarray.length;m++)
  {
     if(spanarray[m]!=''&& valarray[m]!='')
     {
     	finalapge.innerHTML+=`<div class="margin-top-bottom">
		<span id="label1s">${spanarray[m]}:</span><span id="label2s">-${valarray[m]}</span>	
		</div>`;

     }
  	}
  document.getElementsByClassName('final')[0].style.display="block";
  

}

function addRadio(radinputs,radlable,spanradio)
{
	console.log(radinputs);

	console.log(radlable);
	console.log(spanradio);
	var radiosvalue=radinputs.value;
	var radiolabel=radlable.innerHTML;
	spanradio.innerHTML+=`<input type='radio' name=${radiolabel} class='collectinps' value=${radiosvalue}>${radiosvalue}`;
	// box_1.innerHTML+=`<input type='radio'>${valss}`;
	radiotoggle=1;
}
function closeradio()
{
	var radipscls=document.getElementsByClassName('inputs-2');
	var radbtncls=document.getElementsByClassName('radiocls');
	for(var j=0;j<radipscls.length;j++)
	{
		radipscls[j].style.display="none";
		radbtncls[j].style.display='none';
	}

}
function AddSelc(userselid,selid)
{ 
	var val=userselid.value;
	console.log(val);
	console.log(selid);
	selid.innerHTML+=`<option>${val}</option>`;
	userselid.value="";
}
function closeselect()
{
var closeinps=document.getElementsByClassName('collectuserinp')
var closeselcbtn=document.getElementsByClassName('closesel');
for(var i=0;i<closeinps.length;i++)
{
	closeinps[i].style.display="none";
	closeselcbtn[i].style.display="none";
}
}
	
	function Add(labelids,inputid,btnsid)
	{ 
       console.log(labelids);
		let inptval=inputid.value;
		console.log(inptval);
		labelids.innerHTML=inptval;
		labelids.style.visibility="visible";
		close1(inputid,btnsid);
		}

		function close1(lblinp,btns)
		{
			console.log(lblinp);
			console.log(btns);
			lblinp.style.visibility="hidden";
			btns.style.visibility='hidden';
		}
