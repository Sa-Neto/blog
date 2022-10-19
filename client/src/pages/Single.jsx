import React from "react";
import { Link } from "react-router-dom";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import Menu from "../components/Menu";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://images.pexels.com/photos/5422613/pexels-photo-5422613.jpeg?cs=srgb&dl=pexels-karolina-grabowska-5422613.jpg&fm=jpg"
          alt=""
        />
        <div className="user">
          <img
            src="https://images.pexels.com/photos/5422613/pexels-photo-5422613.jpeg?cs=srgb&dl=pexels-karolina-grabowska-5422613.jpg&fm=jpg"
            alt=""
          />
          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <Link to={`/write?edit=2`}>
              <img src={Delete} alt="" />
            </Link>
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet.</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae perferendis, ipsam vitae assumenda veritatis voluptatibus ab, accusamus nihil id, voluptatum eveniet magni. Commodi sint sapiente, cumque doloremque harum debitis fugit sit optio quae eos et illum dolore nesciunt nulla, nisi ipsum aliquid natus maiores provident laborum reiciendis reprehenderit similique quibusdam aliquam! Explicabo, quo deleniti dolore provident ea eos? Ipsam, est asperiores? Magni animi obcaecati ut excepturi error ipsa, quia voluptates nisi alias deserunt nostrum maxime facilis quidem asperiores consectetur eum illum. Dolore saepe at exercitationem, quo reprehenderit eos sit earum autem doloribus vel ex! Ipsum doloremque non a quo quam ipsam dolore, at voluptate? Iure voluptate ullam, ratione facere neque et eos ea accusantium praesentium, dolore, nesciunt sed maxime unde. Maxime voluptatibus unde eius error, voluptatem odio magnam doloribus nostrum obcaecati blanditiis consequatur aut officia iste quos neque eos soluta nulla. Quaerat doloribus reprehenderit dolores quibusdam excepturi, impedit error quae suscipit placeat consequatur vitae recusandae dicta! Soluta debitis doloremque nostrum odio minus harum consectetur, temporibus autem blanditiis assumenda beatae quasi quos cumque qui maiores dolorem! Sint, exercitationem aliquid? Ipsum eveniet pariatur provident nulla sit aliquid, qui, ut eos sed distinctio quibusdam quas! Nam, nisi error fuga pariatur quidem neque inventore.</p>
        <br />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem cumque quo quos voluptate temporibus placeat eum exercitationem at veniam ad. Amet dolorum hic ducimus? Facilis dignissimos obcaecati alias, odit, omnis earum nesciunt pariatur in placeat velit aliquam assumenda. Dolorum saepe, porro soluta cum harum officia quibusdam nam dolore inventore blanditiis. Eligendi ullam perferendis repellat, saepe quam esse quas! Totam minus veniam ipsa consectetur, tempore possimus nisi deleniti ad praesentium laboriosam aspernatur voluptatem ea, ratione doloremque magni minima sunt amet? Libero eius suscipit nisi praesentium aut rem molestias velit fugit itaque! Sequi a esse exercitationem porro pariatur tenetur optio, rem tempore vel, explicabo dolorem quod doloremque accusantium enim nobis expedita adipisci. Consectetur praesentium nihil iure cupiditate vel obcaecati quis veritatis a inventore sint eligendi facere sunt deleniti amet itaque assumenda similique minima, doloremque alias debitis harum eos! Eius non est harum optio ab illo, sed quae aut laborum quaerat, magnam esse molestias ipsa ad. Ad natus quas dolorum quidem? Labore architecto voluptas rerum cumque illum maiores ex, laborum sed rem officia hic deserunt tempora accusantium ratione sunt optio porro eveniet ipsum saepe ab facilis sint corrupti? Sit autem eveniet temporibus eum, at iusto. Expedita temporibus consequuntur reprehenderit quis voluptatem iure quas cupiditate recusandae, illum dolorem, neque doloribus deserunt sint mollitia aperiam nulla eveniet consectetur optio error ipsa earum facilis. Laudantium quis possimus velit provident ducimus quaerat illum ipsa id amet, adipisci deserunt quas unde ipsum dicta optio aliquam ullam assumenda maxime officiis perspiciatis dignissimos ipsam, rerum, enim voluptas. Officia, tempore officiis! Earum quisquam eligendi ducimus maiores praesentium nobis aliquam corrupti consectetur magni a reiciendis et, vel deleniti aut nihil aspernatur fugiat eveniet iusto id consequuntur incidunt debitis iste repellendus temporibus. Ullam dolores qui voluptate porro praesentium commodi aliquid exercitationem nulla sunt molestiae, corporis dicta ad vel quo cum, doloremque aut perspiciatis.</p>
      </div>
      <div className="menu">
        <Menu/>
      </div>
    </div>
  );
};

export default Single;
