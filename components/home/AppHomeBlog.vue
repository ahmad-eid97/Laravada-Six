<template>
    <section class="blogs">
        <div class="row m-0 align-items-center justify-content-between">
            <div class="col-md-12 col-lg-6">
                <div class="heading">
                    <h2>Marketing Resources: Insider Advice on How to Increase Online Sales</h2>
                </div>
            </div>
            <div class="col-auto">
                <a href="#" class="btn">Get A Consultant</a>
            </div>
        </div>
        <div class="row m-0 justify-content-center blog">
            <div class="col-sm-6 col-lg-4">
                <div class="image">
                    <img class="img-fluid" src="https://avada.theme-fusion.com/marketing-consultant/wp-content/uploads/sites/142/2020/06/blog-posts-6.jpg" alt="">
                    <div class="rollover">
                        <div class="rollover-content">
                            <a class="" href="#"></a>
                        </div>
                    </div>
                </div>
                <div class="content">
                    <h2>Marketing Tips And Tricks For Your Website</h2>
                </div>
            </div>
            <div class="col-sm-6 col-lg-4">
                <div class="image">
                    <img class="img-fluid" src="https://avada.theme-fusion.com/marketing-consultant/wp-content/uploads/sites/142/2020/06/blog-posts-5.jpg" alt="">
                    <div class="rollover">
                        <div class="rollover-content">
                            <a class="" href="#"></a>
                        </div>
                    </div>
                </div>
                <div class="content">
                    <h2>How to Write Stunning Blog Post Titles</h2>
                </div>
            </div>
            <div class="col-sm-6 col-lg-4">
                <div class="image">
                    <img class="img-fluid" src="https://avada.theme-fusion.com/marketing-consultant/wp-content/uploads/sites/142/2020/06/blog-posts-4.jpg" alt="">
                    <div class="rollover">
                        <div class="rollover-content">
                            <a class="" href="#"></a>
                        </div>
                    </div>
                </div>
                <div class="content">
                    <h2>Techniques to Reduce Facebook Ads Spend</h2>
                </div>
            </div>
            <div class="col-sm-6 col-lg-4" data-aos="zoom-in-up" data-aos-easing="ease-in-out-quart" data-aos-duration="1000">
                <a href="#" class="btn">Read More Case Studies</a>
            </div>
        </div>
    </section>
</template>

<script>

export default {
    name: 'AppHomeBlog',
    data() {
        return {

        }
    }
}
</script>
<style lang="scss">
    .blogs {
        padding-bottom: 73.2px;
        padding-left: 32px;
        padding-right: 32px;
        padding-top: 73.2px
    }
    .blogs .heading {
        margin: 10px 0 20px;
    }
    .blogs .heading h2 {
        margin: 12px 0 16px;
        font-size: 54px;
        font-weight: 500;
        letter-spacing: -1.944px;
        line-height: 61.5667px;
        text-align: start;
    }

    @include xs {
        .blogs .heading h2 {
            font-size: 34px;
            line-height: 45px;
        }
    }

    .blogs .blog {
        padding-top: 70px
    }
    .blogs .image {
        position: relative;
    }
    .blogs .image .rollover {
        background-image: linear-gradient(to top, rgba(248, 98, 18, 0.6) 0px, rgba(248, 96, 17, 0) 100%);
        transform: translateY(0);
        transition: opacity .5s ease-in-out;
        opacity: 0;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }
    .blogs .image:hover .rollover {
        opacity: 1;
        transform: translateX(0);
    }
    .blogs .content {
        padding: 26px 0;
    }

    @include xs {
        .blogs .content {
            padding: 10px 0 20px;
        }
    }

    .blogs .content h2 {
        font-size: 32px;
        font-weight: 500;
        letter-spacing: -0.768px;
        line-height: 41.6px;
        transition: color 0.2s linear;
        cursor: pointer;
    }

    @include xs {
        .blogs .content h2 {
            font-size: 22px;
            line-height: 41.6px;
        }
    }

    .blogs .content h2:hover {
        color: rgb(248, 96, 17);
    }
    .blogs .seprator {
        display: block;
        margin: 20px 0;
        border: 1px dashed rgba(0, 0, 0, 0.08);
    }
    .blogs .content h3 {
        font-size: 54px;
        font-weight: 700;
        letter-spacing: -1.62px;
        line-height: 61.5667px;
    }
    .blogs .content p {
        font-size: 20px;
        font-weight: 400;
        line-height: 32px;
    }
    .blogs .btn {
        padding: 17px 40px;
        background-color: rgb(248, 96, 17);
        display: inline-block;
        margin: 8px 0;
        font-size: 18px;
        font-weight: 500;
        letter-spacing: -0.18px;
        line-height: 21px;
        text-transform: capitalize;
        border-radius: 10px;
        border: 1px solid rgb(248, 96, 17);
        color: #fff;
    }
    .blogs .btn:hover {
        background-color: rgb(153, 63, 15);
        border: 1px solid rgb(153, 63, 15);
        color: #fff;
    }
    .blogs .btn {
        padding: 17px 40px;
        background-color: rgb(248, 96, 17);
        display: inline-block;
        margin: 8px 0;
        font-size: 18px;
        font-weight: 500;
        letter-spacing: -0.18px;
        line-height: 21px;
        text-transform: capitalize;
        border-radius: 10px;
        border: 1px solid rgb(248, 96, 17);
        color: #fff;
    }
    .blogs .btn:hover {
        background-color: rgb(153, 63, 15);
        border: 1px solid rgb(153, 63, 15);
        color: #fff;
    }
</style>