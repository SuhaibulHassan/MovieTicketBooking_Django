let template_url=window.location.href;
console.log(template_url);


let url_segment=template_url.split('?');
console.log(url_segment[1]);

let play_btn=document.getElementById('play');
let video=document.getElementById('video');

play_btn.addEventListener('click',() =>{
     if(video.paused){
        video.play();
        video.style.display='unset';
        play_btn.classList.remove('bi-play-fill');
        play_btn.classList.add('bi-pause');
    }
    else{
        video.pause();
        video.style.display='none';
        play_btn.classList.remove('bi-pause');
        play_btn.classList.add('bi-play-fill');
    }
})

video.addEventListener('ended',()=>{
    video.play();
})
      
        //Date declaration

let date = new Date();
let main_date=date.getDate();
console.log(main_date)

Array.from(document.getElementsByClassName('date_point')).forEach((el) =>{
    if(el.innerText==main_date){
        console.log(el.innerText);
        el.classList.add('h6_active');
    } 
})

//data
let pvr=[
    {
    theatre:'Sathyam',
    pvr:'PVR Vegus',
    movie:'jawan',
    loc:'Dwarka Sector 14,New Delhi',
    audio:'Tamil',
    type:'4DX',
    series:['H','G','F','E','D','C','B','A'],
    row_section:3,
    seat:24,
    h:[2,6,24,23,7,16,17,18,19,13,12],
    g:[1,2,78,20,23,8,11,18,19,13,12],
    f:[5,6,15,17,18],
    e:[2,7,8,17,18],
    d:[5,16,15,23,22],
    c:[1,2,11,12,19],
    b:[8,5],
    a:[],
    price: [800,800,560,560,560,560,430,430],
    date:13,
    img:"/static/images/jawan.jpg",
    bg_img:"/static/images/bg.png",
    video:"/static/videos/Jawan Official Trailer-(HDvideo9).mp4"
    },
    {
    theatre:'Sathyam',
    pvr:'PVR Vegus',
    movie:'Gadar2',
    loc:'Dwarka Sector 14,New Delhi',
    audio:'Tamil',
    type:'4DX',
    series:['H','G','F','E','D','C','B','A'],
    row_section:3,
    seat:24,
    h:[3,8,21,22,9,13,16,18,28,12,15],
    g:[5,6,8,19,24,8,13,19,21,12,11],
    f:[1,3,13,15,22],
    e:[3,9,10,20,24],
    d:[7,12,9,21,20],
    c:[6,8,11,12,19],
    b:[8,5,12,13,14],
    a:[],
    price:[800,800,560,560,560,560,430,430],
    date:13,
    img:"/static/images/Gadar2.jpg",
    bg_img:"/static/images/gadar_bg.jpg",
    video:"/static/videos/Gadar2 Official Trailer - 11th August"
    },
    {
    theatre:'Chakravarthy',
    pvr:'PVR Vegus',
    movie:'jawan',
    loc:'Dwarka Sector 14,New Delhi',
    audio:'Tamil',
    type:'4DX',
    series:['H','G','F','E','D','C','B','A'],
    row_section:3,
    seat:24,
    h:[2,6,24,23,7,16,17,18,19,13,12],
    g:[1,2,78,20,23,8,11,18,19,13,12],
    f:[5,6,15,17,18],
    e:[2,7,8,17,18],
    d:[5,16,15,23,22],
    c:[1,2,11,12,19],
    b:[8,5],
    a:[],
    price: [800,800,560,560,560,560,430,430],
    date:13,
    bg_img:"/static/images/bg.png",
    img:"/static/images/jawan.jpg",
    video:"/static/videos/Jawan Official Trailer-(HDvideo9).mp4"
    },
    {
    theatre:'Chakravarthy',
    pvr:'PVR Vegus',
    movie:'Gadar2',
    loc:'Dwarka Sector 14,New Delhi',
    audio:'Tamil',
    type:'4DX',
    series:['H','G','F','E','D','C','B','A'],
    row_section:3,
    seat:24,
    h:[3,8,21,22,9,13,16,18,28,12,15],
    g:[5,6,8,19,24,8,13,19,21,12,11],
    f:[1,3,13,15,22],
    e:[3,9,10,20,24],
    d:[7,12,9,21,20],
    c:[6,8,11,12,19],
    b:[8,5,12,13,14],
    a:[6,7,8,9],
    price:[800,800,560,560,560,560,430,430],
    date:13,
    bg_img:"/static/images/gadar_bg",
    img:"images/Gadar2.jpg",
    video:"/static/videos/Gadar2 Official Trailer - 11th August"
    },
    ]



let addSeats=(arr)=>{
    //console.log(arr);
    arr.forEach((el,i)=>{
        const {theatre,movie,series,row_section,seat,price, a, b, c, d, e ,f, g, h,audio,type}=el;
        //create Row
        for (let index = 0; index < series.length; index++) {
            // console.log(series[index]);
            // console.log(series.length);
            
            let row=document.createElement('div');
            row.className='row';
            
            let booked_seats=[];
            booked_seats=[...eval(series[index].toLocaleLowerCase())];
            //console.log(series[0]);
            let new_booked_Seats=booked_seats.map((obj)=>obj-1)
            // console.log(new_booked_Seats);
            
            // console.log(booked_seats);

            //Create seats
            for (let seats = 0; seats < seat; seats++) {
                if(seats===0){
                    let span=document.createElement('span');
                    span.innerText=series[index];
                    row.appendChild(span); 
                }
                let li=document.createElement('li');
                //filtering the booked-seats
                let filter=new_booked_Seats.filter(el => {
                    return el === seats;
                })
                // console.log(filter);

                if(filter.length>0){
                    li.className = "seat booked";
                }
                else{
                    li.className = "seat";
                }
                
                li.id=series[index]+seats;
                li.setAttribute('book',seats+1);
                li.setAttribute('sr',series[index]);
                li.setAttribute('movie',movie)
                li.setAttribute('price',price[index])
                li.setAttribute('audio',audio)
                li.setAttribute('type',type)
                li.innerText=price[index];
                li.setAttribute('theatre',theatre)
                
                li.onclick=()=>{
                    if(li.className === 'seat booked'){
                        li.classList.remove('selected');
                    }
                    else{
                        li.classList.toggle('selected');
                    }
                    let len=Array.from(document.getElementsByClassName('selected')).length;
                    if( len > 0){
                        document.getElementById('book_ticket').style.display='unset';
                   }
                   else{
                        document.getElementById('book_ticket').style.display='none';
                   }
    
                }

                row.appendChild(li);
                if(seats===seat-1){
                    let span=document.createElement('span');
                    span.innerText=series[index];
                    row.appendChild(span);
                }
            }

            document.getElementById('chair').appendChild(row);
        }

    })
}


let theatre_info=pvr.map((obj)=>{ 
    if(obj.movie == url_segment[1]){
        return obj.theatre
}})

console.log(theatre_info);
theatre_info.forEach(el => {
    if (el!=undefined) {
        let slot=document.createElement('div');
        slot.className='slot'
        slot.id='slot'
        let theatre_name=document.createElement('h1');
        theatre_name.innerText=el;
        theatre_name.className='theatre_name'
        theatre_name.id='theatre_name'
        let time_conatiner=document.createElement('div');
        time_conatiner.className='time_conatiner'
        let timeSlot=document.createElement('h2');
        timeSlot.innerText='10.00'
        timeSlot.className='timeSlot'
        time_conatiner.appendChild(timeSlot)
        slot.appendChild(theatre_name)
        slot.appendChild(time_conatiner)
        document.getElementById('theatre_container').appendChild(slot)
        let data=pvr.filter(obj=>obj.date===main_date && obj.movie===url_segment[1]);
        console.log(data);
        document.getElementById('title').innerText=data[0].movie
        console.log(data[0].img)
        document.getElementById('poster').src=data[0].img
        let bg_img=data[0].bg_img
        document.getElementById('video').src=data[0].video
        
        // let right=document.getElementById('right')
        // let beforeOfRight=window.getComputedStyle(right,'::before')
        // console.log(beforeOfRight.background)
        // beforeOfRight.setProperty('url',bg_img)
        // right.setProperty('url',bg_img)
        document.documentElement.style.setProperty('--background_image',bg_img)
        console.log(bg_img) 
    }
});

main_array=new Array()

document.getElementById('slot').addEventListener('click',()=>{
    window.theatre_filter=document.getElementById('theatre_name').innerText;
    console.log(theatre_filter);
    sessionStorage.setItem('theatre_filter',theatre_filter)
    let data=pvr.filter(obj=> obj.date ==  main_date && obj.movie == url_segment[1] && obj.theatre==theatre_filter);
    console.log(data);       
    // let pvrdate=pvr.filter(obj=> obj.date==main_date)
    // console.log(pvrdate);
    document.getElementById('theatre_container').style.display='none';
    addSeats(data)
})
// let theatre_filter=sessionStorage.getItem('theatre')
// console.log(theatre_filter);

document.getElementById('book_ticket').addEventListener('click',()=>{
    let selected_seats=Array.from(document.getElementsByClassName('selected'))
    console.log(selected_seats);
    Array.from(document.getElementsByClassName('selected')).forEach((el) =>{
        console.log(el);
        let seat_no=el.getAttribute('book');
        let seat_sr=el.getAttribute('sr').toLocaleLowerCase();
        let seat_price=el.innerText;
        let movie_name=el.getAttribute('movie')
        let audio=el.getAttribute('audio')
        let type=el.getAttribute('type')
        let theatre=el.getAttribute('theatre')
            
        let obj={
            movie: movie_name,
            date: main_date,
            seat_cost:seat_price,
            seat_number:seat_no,
            seat_series:seat_sr
        }
            // let obj_array=new Array()
            // obj_array.push(obj)
        console.log(obj);
            // console.log(obj_array)
            // sessionStorage.setItem('myData',JSON.stringify(obj))
            // let data1=JSON.parse(sessionStorage.getItem('myData'))
            // console.log(data1);
            //pushing the selected seats into json array
        let theatre_filter=window.theatre_filter
        // console.log(window.theatre_filter);
        console.log(theatre_filter);
            
        let getData=pvr.map((obj)=>{
            if(obj.movie === url_segment[1] && obj.date === main_date && obj.theatre===theatre_filter)
                {
                    obj[seat_sr].push(+seat_no);
                }
                return obj;
            });
        console.log(getData);
    
        document.getElementById('chair').innerHTML='';
        let data=getData.filter(obj=>obj.date===main_date && obj.movie===url_segment[1] && obj.theatre===theatre_filter);
        console.log(data);
            
        addSeats(data);

        document.getElementById('screen').style.display='none';
        document.getElementById('chair').style.display='none';
        document.getElementById('det').style.display='none';
        document.getElementById('book_ticket').style.display='none';
        document.getElementById('back_ticket').style.display='unset';
        document.getElementById('ticket').style.display='unset';
        document.getElementById('make_payment').style.display='unset';
    
            let tic=document.createElement('div');
            tic.className='tic';
            tic.innerHTML=`
            <div class="barcode">
                <div class="card">
                    <h6>ROW ${seat_sr.toLocaleUpperCase()}</h6>
                    <h6>${main_date} September 2023</h6>
                </div>
                <div class="card">
                    <h6>Seat ${seat_no}</h6>
                    <h6>23:00</h6>
                </div>
                <svg id="${seat_sr}${seat_no}barcode"></svg>
                <h5>VEGUS CINEMA</h5>
            </div>
            <div class="tic_details">
                <div class="type">${type}</div>
                <h5 class="pvr"><span>Vegus</span>Cinema</h5>
                <h1>JAWAN</h1>
                <div class="seat_det">
                    <div class="seat_card">
                        <h6>ROW</h6>
                        <h6>${seat_sr.toLocaleUpperCase()}</h6>
                    </div>
                    <div class="seat_card">
                        <h6>SEAT</h6>
                        <h6>${seat_no}</h6>
                    </div>
                    <div class="seat_card">
                        <h6>DATE</h6>
                        <h6>${main_date} <sub>Sep</sub></h6>
                    </div>
                    <div class="seat_card">
                        <h6>TIME</h6>
                        <h6>11:30 <sub>pm</sub> </h6>
                    </div>
                    <div class="theatre_name no_design">
                        ${theatre}
                    </div>
                    <div class="seat_price no_design">
                        ${seat_price}
                    </div>
                    <div class="audio no_design">
                        ${audio}
                    </div>
                </div>
            </div>
            `
        document.getElementById('ticket').appendChild(tic);
    
        JsBarcode(`#${seat_sr}${seat_no}barcode`,`${seat_sr.toLocaleUpperCase()}${seat_no}${el.innerText}${main_date}122024`);
        array=[main_date,theatre,movie_name,seat_sr,seat_no,type,audio,seat_price]
        console.log(array);
        main_array.push(array)
        })
    })

document.getElementById('back_ticket').addEventListener('click',()=>{
    document.getElementById('screen').style.display='inline-block';
    document.getElementById('chair').style.display='unset';
    document.getElementById('det').style.display='flex';
    document.getElementById('book_ticket').style.display='unset';
    document.getElementById('back_ticket').style.display='none';
    document.getElementById('ticket').style.display='none';
    document.getElementById('make_payment').style.display='none';
})
  ////  // 
// })


let offDate=()=>{
    Array.from(document.getElementsByClassName("date_point")).forEach(el=>{
        el.classList.remove("h6_active");
    })
}

Array.from(document.getElementsByClassName('date_point')).forEach(el=>{
    el.addEventListener('click',()=>{
        if (el.innerText>date.getDate()-1) {
            offDate();
            el.classList.add("h6_active")
            main_date=el.innerText;
            document.getElementById('chair').innerHTML='';
            let data=pvr.filter(obj=> obj.date ==  main_date && obj.movie == url_segment[1]);
            console.log(data);
            addSeats(data)
        }
    })
})

// document.getElementById('book_ticket').addEventListener('click',()=>{
//     Array.from(document.getElementsByClassName('selected')).forEach((el) =>{
//         let seat_no=el.getAttribute('book');
//         let seat_sr=el.getAttribute('sr').toLocaleLowerCase();
//         let seat_price=el.innerText;

//         let obj={
//             movie: url_segment[0],
//             date: main_date
//         }
//         //pushing the selected seats into json array
//         let getData=pvr.map((obj)=>{
//             if(obj.movie === url_segment[1] && obj.date === main_date)
//             {
//                 obj[seat_sr].push(+seat_no);
//             }
//             return obj;
//         });
//          console.log(getData);

//         document.getElementById('chair').innerHTML='';
//         let data1=getData.filter(obj=>obj.date===main_date && obj.movie===url_segment[1]);
//         addSeats(data1);
//         console.log(data1);
        

//         document.getElementById('screen').style.display='none';
//         document.getElementById('chair').style.display='none';
//         document.getElementById('det').style.display='none';
//         document.getElementById('book_ticket').style.display='none';
//         document.getElementById('back_ticket').style.display='unset';
//         document.getElementById('ticket').style.display='unset';

//         let tic=document.createElement('div');
//         tic.className='tic';
//         tic.innerHTML=`
//         <div class="barcode">
//             <div class="card">
//                 <h6>ROW ${seat_sr.toLocaleUpperCase()}</h6>
//                 <h6>${main_date} September 2023</h6>
//             </div>
//             <div class="card">
//                 <h6>Seat ${seat_no}</h6>
//                 <h6>23:00</h6>
//             </div>
//             <svg id="${seat_sr}${seat_no}barcode"></svg>
//             <h5>VEGUS CINEMA</h5>
//         </div>
//         <div class="tic_details">
//             <div class="type">4DX</div>
//             <h5 class="pvr"><span>Vegus</span>Cinema</h5>
//             <h1>JAWAN</h1>
//             <div class="seat_det">
//                 <div class="seat_card">
//                     <h6>ROW</h6>
//                     <h6>${seat_sr.toLocaleUpperCase()}</h6>
//                 </div>
//                 <div class="seat_card">
//                     <h6>SEAT</h6>
//                     <h6>${seat_no}</h6>
//                 </div>
//                 <div class="seat_card">
//                     <h6>DATE</h6>
//                     <h6>${main_date} <sub>Sep</sub></h6>
//                 </div>
//                 <div class="seat_card">
//                     <h6>TIME</h6>
//                     <h6>11:30 <sub>pm</sub> </h6>
//                 </div>
//             </div>
//         </div>
//         `
//     document.getElementById('ticket').appendChild(tic);

//     JsBarcode(`#${seat_sr}${seat_no}barcode`,`${seat_sr.toLocaleUpperCase()}${seat_no}${el.innerText}${main_date}92024`);

//     })
// })

// document.getElementById('back_ticket').addEventListener('click',()=>{
//     document.getElementById('screen').style.display='inline-block';
//     document.getElementById('chair').style.display='unset';
//     document.getElementById('det').style.display='flex';
//     document.getElementById('book_ticket').style.display='unset';
//     document.getElementById('back_ticket').style.display='none';
//     document.getElementById('ticket').style.display='none';
// })


//                     //index page script
Array.from(document.getElementsByClassName('selected')).forEach((el) =>{
    let table_row=document.createElement('tr')
    table_row.innerHTML=`
    <td></td>
    <td></td>
    <td>${seat_sr}${seat_no}</td>
    <td></td>
    `
    document.getElementById('table_body').appendChild(table_row)
})

document.getElementById('make_payment').addEventListener('click',()=>{
    console.log("hi");
    console.log(main_array);
    
    let form=document.createElement('form');
    form.id='form_submit'
    form.setAttribute('method','post')
    form.innerHTML=`
    <div>
        <label for="id_ticketdetails">Ticketdetails:</label>
        <textarea name="ticketdetails" required id="id_ticketdetails" cols="40" rows="10">"${main_array}"</textarea>
    </div>
`
document.getElementById('payment').appendChild(form);
document.getElementById('form_submit').submit()

})
