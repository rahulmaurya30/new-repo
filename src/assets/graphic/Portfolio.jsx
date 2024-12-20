import mixitup from 'mixitup';
import React from 'react'
import { Link } from 'react-router-dom'
import { FaSearchPlus } from "react-icons/fa";
import { FaLink } from "react-icons/fa";


export default function Portfolio() {




    // $(document).ready(function () {

    //     $(".filter-button").click(function () {
    //         var value = $(this).attr('data-filter');

    //         if (value == "all") {
    //             //$('.filter').removeclassName('hidden');
    //             $('.filter').show('1000');
    //         }
    //         else {
    //             //            $('.filter[filter-item="'+value+'"]').removeclassName('hidden');
    //             //            $(".filter").not('.filter[filter-item="'+value+'"]').addclassName('hidden');
    //             $(".filter").not('.' + value).hide('3000');
    //             $('.filter').filter('.' + value).show('3000');

    //         }
    //     });

    //     if ($(".filter-button").removeclassName("active")) {
    //         $(this).removeclassName("active");
    //     }
    //     $(this).addclassName("active");

    // });


    $(document).ready(function(){

        $(".filter-button").click(function(){
            var value = $(this).attr('data-filter');
            
            if(value == "all")
            {
                //$('.filter').removeClass('hidden');
                $('.filter').show('1000');
            }
            else
            {
    //            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
    //            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
                $(".filter").not('.'+value).hide('3000');
                $('.filter').filter('.'+value).show('3000');
                
            }
        });
        
        if ($(".filter-button").removeClass("active")) {
    $(this).removeClass("active");
    }
    $(this).addClass("active");
    
    });

    return (
        <>

            <div className='container py-4'>
                <div className='row'>


                    <div className='col-xl-3 '>
                        <h1><a>Emily Jones</a></h1>
                    </div>
                    <div className='col-xl-9'>
                        <nav className='navbar'>
                            <ul>
                                <li><Link to='/' className=' active page-title nav_link  '>Home</Link></li>
                                <li><Link to='/About' className='nav_link active  page-title' >About</Link></li>
                                <li><Link className='nav_link active  page-title'  >Resume</Link></li>
                                <li><Link to='/service' className='nav_link active  page-title' >Services</Link></li>
                                <li><Link to='/port' className='nav_link active  page-title' >Portfolio</Link></li>
                                <li><Link to='/singup' className='nav_link active  page-title' >Profile</Link></li>
                                {/* <li><Link className='nav_link active  page-title' >blog</Link></li> */}
                                {/* <li> <a><Link to='/dash' className=' page-title'>Dashborad</Link></a></li> */}
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            {/* 
            <div classNameName="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter sprinkle ">

<img src="https://cdn.pixabay.com/photo/2021/10/11/17/54/technology-6701504_640.jpg" alt="Avatar" classNameName="image  " />
<div classNameName="overlay">
    <div classNameName="text">Hello World</div>
</div>
</div> */}


            {/* <div className="container port">
                <div className="row">
                    <div className="gallery col-lg-12 col-md-12 col-sm-12 col-xs-12 port_h">
                        <h1 className="gallery-title">Portfolio</h1>
                    </div>

                    <div align="center" classNameName='col-12 mt-5'>
                        <button className="btn btn-default filter-button" data-filter="all">ALL</button>
                        <button className="btn btn-default filter-button" data-filter="hdpe">APP</button>
                        <button className="btn btn-default filter-button" data-filter="sprinkle">PRODUCT</button>
                        <button className="btn btn-default filter-button" data-filter="spray">BRANDING</button>
                        <button className="btn btn-default filter-button" data-filter="irrigation">BOOKS</button>
                    </div>
                    <br />



                    <div classNameName="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter sprinkle ">

                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKpIL_pA1ysEAr9N5bcPmI4_ceBw0LNsNEdw&s"
                            product
                            alt="Avatar"
                            classNameName="image  " />
                        <div classNameName="overlay">
                            <div classNameName="text">
                            <ul>
                                <li><FaSearchPlus /></li>
                                <li><FaLink /></li>
                            </ul>
                                
                                </div>
                        </div>
                    </div>

                    <div classNameName="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter sprinkle ">

                        <img src="https://media.licdn.com/dms/image/C5612AQE_l6k-pslOfg/article-cover_image-shrink_720_1280/0/1588628237855?e=2147483647&v=beta&t=0d6pELqW6mq0VftEN0HhAblCHz4EB9YWMlyXWXJ7Ef8"
                            product
                            alt="Avatar"
                            classNameName="image  "
                        />
                        <div classNameName="overlay">
                            <div classNameName="text">
                            <ul>
                                <li><FaSearchPlus /></li>
                                <li><FaLink /></li>
                            </ul>
                            </div>
                        </div>
                    </div>

                    <div classNameName="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter hdpe ">

                        <img src="https://watermark.lovepik.com/photo/40029/4676.jpg_wh1200.jpg"
                            product
                            alt="Avatar"
                            classNameName="image  "
                        />
                        <div classNameName="overlay">
                            <div classNameName="text">
                            <ul>
                                <li><FaSearchPlus /></li>
                                <li><FaLink /></li>
                            </ul>
                            </div>
                        </div>
                    </div>

                    <div classNameName="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter sprinkle ">

                        <img src="https://media.licdn.com/dms/image/C5612AQE_l6k-pslOfg/article-cover_image-shrink_720_1280/0/1588628237855?e=2147483647&v=beta&t=0d6pELqW6mq0VftEN0HhAblCHz4EB9YWMlyXWXJ7Ef8"
                            product
                            alt="Avatar"
                            classNameName="image  "
                        />
                        <div classNameName="overlay">
                            <div classNameName="text">
                            <ul>
                                <li><FaSearchPlus /></li>
                                <li><FaLink /></li>
                            </ul>
                            </div>
                        </div>
                    </div>

                    <div classNameName="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter sprinkle ">

                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX8XCQA5s0Pjnj0OxvRP8erbJgf3N7Q4m83g&s"

                            alt="Avatar"
                            classNameName="image  "
                        />
                        <div classNameName="overlay">
                            <div classNameName="text"> 
                                <ul>
                                <li><FaSearchPlus /></li>
                                <li><FaLink /></li>
                            </ul></div>
                        </div>
                    </div>
                    <div classNameName="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter spray ">

                        <img src="https://i.pinimg.com/564x/cf/b3/44/cfb3444d254ef202a31f26a8da39a7a8.jpg"

                            alt="Avatar"
                            classNameName="image  "
                        />
                        <div classNameName="overlay">
                            <div classNameName="text">
                            <ul>
                                <li><FaSearchPlus /></li>
                                <li><FaLink /></li>
                            </ul>
                            </div>
                        </div>
                    </div>

                    <div classNameName="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter spray ">

                        <img src="https://cdn.pixabay.com/photo/2023/11/01/17/12/ai-generated-8358416_640.jpg"

                            alt="Avatar"
                            classNameName="image  "
                        />
                        <div classNameName="overlay">
                            <div classNameName="text">
                            <ul>
                                <li><FaSearchPlus /></li>
                                <li><FaLink /></li>
                            </ul>
                            </div>
                        </div>
                    </div>

                    <div classNameName="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter spray ">

                        <img src="https://i.etsystatic.com/39477223/r/il/58f254/4621727445/il_fullxfull.4621727445_mbda.jpg"

                            alt="Avatar"
                            classNameName="image  "
                        />
                        <div classNameName="overlay">
                            <div classNameName="text">
                            <ul>
                                <li><FaSearchPlus /></li>
                                <li><FaLink /></li>
                            </ul>
                            </div>
                        </div>
                    </div>

                    <div classNameName="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter APP ">

                        <img src="https://media.istockphoto.com/id/1182595599/vector/cartoon-robot-isolated-on-a-white-background.jpg?s=612x612&w=0&k=20&c=ZhQCeEg-Oo7q71XdBlnIoXj_MVCMcIn9spMx3Z-TGR8="

                            alt="Avatar"
                            classNameName="image  "
                        />
                        <div classNameName="overlay">
                            <div classNameName="text">
                            <ul>
                                <li><FaSearchPlus /></li>
                                <li><FaLink /></li>
                            </ul>
                            </div>
                        </div>
                    </div>

                    <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter hdpe">
                        <img src="https://r2.erweima.ai/imgcompressed/compressed_cc489237e529601c570a878012b8145a.webp"

                            alt="Avatar"
                            classNameName="image  "
                        />
                        <div classNameName="overlay">
                            <div classNameName="text">
                            <ul>
                                <li><FaSearchPlus /></li>
                                <li><FaLink /></li>
                            </ul>
                            </div>
                        </div>
                    </div>

                    <div classNameName="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter spray ">

                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFcEOK2dqv1HazOyY7oC5Urhr-n33M56XHMQ&s"

                            alt="Avatar"
                            classNameName="image  "
                        />
                        <div classNameName="overlay">
                            <div classNameName="text">
                            <ul>
                                <li><FaSearchPlus /></li>
                                <li><FaLink /></li>
                            </ul>
                            </div>
                        </div>
                    </div>


                    <div classNameName="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter spray ">

                        <img src="https://img.freepik.com/premium-vector/illustratortion-vector-cute-funny-baby-robot_918459-2494.jpg"

                            alt="Avatar"
                            classNameName="image  "
                        />
                        <div classNameName="overlay">
                            <div classNameName="text">
                            <ul>
                                <li><FaSearchPlus /></li>
                                <li><FaLink /></li>
                            </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div> */}



            <div className="container">
                <div className="row">
                    <div className="gallery col-lg-12 col-md-12 col-sm-12 col-xs-12 about_us">
                        <h1>PORTFOLIO</h1>
                    </div>

                    <div align="center" className='col-12'>
                        <button className="btn btn-default filter-button" data-filter="all">ALL</button>
                        <button className="btn btn-default filter-button" data-filter="hdpe">APP</button>
                        <button className="btn btn-default filter-button" data-filter="sprinkle">PRODUCT</button>
                        <button className="btn btn-default filter-button" data-filter="spray">BRANDING</button>
                        <button className="btn btn-default filter-button" data-filter="irrigation">BOOKS</button>
                    </div>
                    <br />



                    <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-12 filter hdpe ">
                        <img src="https://thumbs.dreamstime.com/b/kharkov-ukraine-february-many-icons-popular-social-networks-messengers-printed-white-paper-logos-modern-communication-214039887.jpg" className="img-responsive " />

                        <div className="overlay">
                            <img src='https://img2.exportersindia.com/product_images/bc-full/2020/4/6813765/mobile-app-development-services-1586945298-5373361.jpg' classNameName='over-img' />
                            {/* <div className="text">Hello World</div> */}
                        </div>
                    </div>

                    <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-12 filter sprinkle">
                        <img src="https://static.vecteezy.com/system/resources/previews/028/245/486/large_2x/worldgraphy-day-vintage-camera-on-background-professional-hobby-ai-generated-photo.jpeg" className="img-responsive" />
                        <div className="overlay">
                            <img src='https://st3.depositphotos.com/1007963/19095/i/450/depositphotos_190956400-stock-photo-vintage-professional-cameraslenses-and-a.jpg' classNameName='over-img' />
                            {/* <div className="text">Hello World</div> */}
                        </div>

                    </div>

                    <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-12 filter hdpe">
                        <img src="https://media.licdn.com/dms/image/D4D12AQEWIB9lZ2N8Rg/article-cover_image-shrink_600_2000/0/1677603790422?e=2147483647&v=beta&t=rXy6NWWnzCcwnJMJW4WiBX9IpO5tQ2c9ua_Hfl2XG0A" className="img-responsive " />

                        <div className="overlay">
                            <img src='https://static.vecteezy.com/system/resources/thumbnails/008/693/395/small_2x/set-logo-icon-social-media-hand-drawn-doodle-cartoon-illustration-vector.jpg' classNameName='over-img' />
                            {/* <div className="text">Hello World</div> */}
                        </div>
                    </div>

                    <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-12 filter irrigation">
                        <img src="https://library.si.edu/sites/default/files/styles/wysiwyg_400px_wide/public/media-uploads/old_books-1_0.jpg?itok=AmMciYki" className="img-responsive" />
                    
                     <div className="overlay">
                            <img src='https://img.freepik.com/premium-photo/arafed-bookshelves-with-many-books-them-room-generative-ai_900814-549.jpg' classNameName='over-img' />
                            {/* <div className="text">Hello World</div> */}
                        </div>
                    
                    </div>

                    <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-12 filter spray">
                        <img src="https://media.licdn.com/dms/image/D5612AQGD0rReXVubSQ/article-cover_image-shrink_720_1280/0/1707735835502?e=2147483647&v=beta&t=nVdoWbJ_zh4MzbuW90bbNclzXa_g5DvjO0XeN6v5WQg" className="img-responsive" />
                        
                        <div className="overlay">
                            <img src='https://static.vecteezy.com/system/resources/thumbnails/016/088/581/small_2x/cool-duck-or-goose-character-logo-mascot-icon-for-branding-in-cartoon-vector.jpg' classNameName='over-img' />
                            {/* <div className="text">Hello World</div> */}
                        </div>
                    </div>

                    <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-12 filter irrigation">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTukon2IWDc1sNM8jwDAyzsGAGORuHYB_D2kA&s" className="img-responsive" />

                        <div className="overlay">
                            <img src='https://ih1.redbubble.net/image.4726031436.3294/raf,360x360,075,t,fafafa:ca443f4786.u2.jpg' classNameName='over-img' />
                            {/* <div className="text">Hello World</div> */}
                        </div>
                    
                    
                    </div>

                    <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-12 filter spray">
                        <img src="https://static.vecteezy.com/system/resources/thumbnails/022/038/826/small_2x/cute-girl-hacker-with-laptop-avatar-in-cartoon-style-generative-ai-photo.jpg" className="img-responsive" />

                        
                        <div className="overlay">
                            <img src='https://cdn.pixabay.com/photo/2024/04/19/16/06/ai-generated-8706603_640.jpg' classNameName='over-img' />
                            {/* <div className="text">Hello World</div> */}
                        </div>
                    </div>

                    <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-12 filter irrigation">
                        <img src="https://png.pngtree.com/png-vector/20230318/ourmid/pngtree-book-clipart-vector-png-image_6653535.png" className="img-responsive" />
                          
                        <div className="overlay">
                            <img src='https://icon2.cleanpng.com/20231118/uzt/transparent-flower-bouquet-cartoon-style-book-pile-with-pastel-colors-1711011447487.webp' classNameName='over-img' />
                            {/* <div className="text">Hello World</div> */}
                        </div>

                    </div>

                    <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-12 filter irrigation">
                        <img src="https://img.freepik.com/premium-photo/stack-books-library-world-book-day_1034414-1361.jpg" className="img-responsive" />


                        <div className="overlay">
                            <img src='https://static.vecteezy.com/system/resources/thumbnails/023/337/473/small_2x/ai-generative-books-stock-illustration-free-png.png' classNameName='over-img' />
                            {/* <div className="text">Hello World</div> */}
                        </div>
                    </div>

                    {/* <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter hdpe">
                <img src="http://fakeimg.pl/365x365/" className="img-responsive" />
            </div>

            <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter spray">
                <img src="http://fakeimg.pl/365x365/" className="img-responsive" />
            </div>

            <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter sprinkle">
                <img src="http://fakeimg.pl/365x365/" className="img-responsive" />
            </div> */}
                </div>
            </div>



        </>
    )
}
