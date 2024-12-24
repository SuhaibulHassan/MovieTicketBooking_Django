// console.log('helo');
// let form_list=new Array();
// let tic=document.createElement('div');
// tic.className='tic';
// tic.id='tic'
// tic.innerHTML=`
//     <form method='POST' id='session_form1' class='session_form'>
//         <div>
//             <label for='id_date'>Date:</label>
//             <input type="text" name="date" maxlength="20" required id="id_date" value='8'>
//         </div>
//         <div>
//             <label for='id_theatre_name'>Theatre name:</label>
//             <input type="text" name="theatre_name" maxlength="20" required id="id_theatre_name" value='Sathyam'>
//         </div>
//         <div>
//             <label for='id_movie_name'>Movie name:</label>
//             <input type="text" name="movie_name" maxlength="30" required id="id_movie_name" value='minnale'>
//         </div>
//         <div>
//             <label for='id_audio'>Audio:</label>
//             <input type="text" name="audio" maxlength="20" required id="id_audio" value='tamil'>
//         </div>
//         <div>
//             <label for='id_type'>Type:</label>
//             <input type="text" name="type" maxlength="10" required id="id_type" value='2d'>
//         </div>
//         <div>
//             <label for='id_series'>Series:</label>
//             <input type="text" name="series" maxlength="2" required id="id_series" value='h'>
//         </div>
//         <div>
//             <label for='id_seat_number'>Seat number:</label>
//             <input type="number" name="seat_number" required id="id_seat_number" value='18'>
//         </div>
//         <div>
//             <label for='id_price'>Price:</label>
//             <input type="number" name="price" step="any" required id="id_price" value='1000.00'>
//         </div>
//     </form>
//     `
// let tic1=document.createElement('div');
// tic1.className='tic';
// tic1.id='tic'
// tic1.innerHTML=`
//     <form method='POST' id='session_form1' class='session_form'>
//         <div>
//             <label for='id_date'>Date:</label>
//             <input type="text" name="date" maxlength="20" required id="id_date" value='8'>
//         </div>
//         <div>
//             <label for='id_theatre_name'>Theatre name::</label>
//             <input type="text" name="theatre_name" maxlength="20" required id="id_theatre_name" value='Sathyam'>
//         </div>
//         <div>
//             <label for='id_movie_name'>Movie name:</label>
//             <input type="text" name="movie_name" maxlength="30" required id="id_movie_name" value='minnale'>
//         </div>
//         <div>
//             <label for='id_audio'>Audio:</label>
//             <input type="text" name="audio" maxlength="20" required id="id_audio" value='tamil'>
//         </div>
//         <div>
//             <label for='id_type'>Type:</label>
//             <input type="text" name="type" maxlength="10" required id="id_type" value='2d'>
//         </div>
//         <div>
//             <label for='id_series'>Series:</label>
//             <input type="text" name="series" maxlength="2" required id="id_series" value='h'>
//         </div>
//         <div>
//             <label for='id_seat_number'>Seat number:</label>
//             <input type="number" name="seat_number" required id="id_seat_number" value='18'>
//         </div>
//         <div>
//             <label for='id_price'>Price:</label>
//             <input type="number" name="price" step="any" required id="id_price" value='1000.00'>
//         </div>
//     </form>
// `

// // tic.innerHTML=`
// //         <div class="barcode">
// //             <div class="card">
// //                 <h6>ROW S</h6>
// //                 <h6>4 September 2023</h6>
// //             </div>
// //             <div class="card">
// //                 <h6>Seat 18</h6>
// //                 <h6>23:00</h6>
// //             </div>
// //             <svg id="S18barcode"></svg>
// //             <h5>VEGUS CINEMA</h5>
// //         </div>
// //         <div class="tic_details">
// //             <div class="type">4DX</div>
// //             <h5 class="pvr"><span>Vegus</span>Cinema</h5>
// //             <h1>JAWAN</h1>
// //             <div class="seat_det">
// //                 <div class="seat_card">
// //                     <h6>ROW</h6>
// //                     <h6 class="card_details">S<h6>
// //                 </div>
// //                 <div class="seat_card">
// //                     <h6>SEAT</h6>
// //                     <h6 class="card_details">18</h6>
// //                 </div>
// //                 <div class="seat_card">
// //                     <h6>DATE</h6>
// //                     <h6 class="card_details">4<sub>Sep</sub></h6>
// //                 </div>
// //                 <div class="seat_card">
// //                     <h6>TIME</h6>
// //                     <h6 class="card_details">11:30 <sub>pm</sub> </h6>
// //                 </div>
// //                 <div class="theatre_name">
// //                     Sathyam
// //                 </div>
// //             </div>
// //         </div>
// //         `
// document.getElementById('ticket').appendChild(tic);
// document.getElementById('ticket').appendChild(tic1);
let tic=document.createElement('div');
tic.className='tic';
tic.id='tic'
tic.innerHTML=`
    <form method='post' id='form_submit'
    <div>
        <label for="id_ticketdetails">Ticketdetails:</label>
        <textarea name="ticketdetails" required id="id_ticketdetails" cols="40" rows="10">
        {{audio:tamil,date: 8,movie_name:minnale,price:1000.00,seat_number:18,series:h,theatre_name:Sathyam,type: 2d},
        {audio:tamil,date:8,movie_name:minnale,price:1000.00,seat_number:18,series:h,theatre_name:Sathyam,type:2d}}
        </textarea>
    </div>
    </form>
`
document.getElementById('ticket').appendChild(tic)
document.getElementById('session_submit').addEventListener('click',()=>{
    document.getElementById('form_submit').submit()
})