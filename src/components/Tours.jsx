

// export default function Tours({list}) {
//   return (
//     <div>
//       {list.map((item) => {
//         const {id, image, description, price, title } = item;
//         return (
//             <div key={id}>
//                 <img src={image} alt="" />
//                 <h2>{title}</h2>
//                 <h4>{description}</h4>
//                 <h3>{price}</h3>
//             </div>
//         )
//       })}
//     </div>
//   )
// }

import Tour from "./Tour";

// import Tour from "./Tour";


// export default function Tours() {
//   return (
//     <div>
//       {list.map((item) => <Tour key={item.id}/>)}
//     </div>
//   )
// }



export default function Tours({list} ) {
  return (
    <div>
      {list.map((item) => <Tour key={item.id} {...item} />)}
    </div>
  )
}

 