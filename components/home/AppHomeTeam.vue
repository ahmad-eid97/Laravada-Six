<template>
    <section class="team">
        <div class="row m-0 justify-content-between align-items-center">
            <div class="col-md-6">
                <div class="image" data-aos="fade-right" data-aos-easing="ease-in-out-quart" data-aos-duration="1000">
                    <img class="img-fluid" src="https://avada.theme-fusion.com/marketing-consultant/wp-content/uploads/sites/142/2020/07/large-testimonial-600x583.jpg" alt="">
                </div>
            </div>
            <div class="col-md-6">
                <div class="text" data-aos="fade-left" data-aos-easing="ease-in-out-quart" data-aos-duration="1000">
                    <h3>
                        “The team at Avada Marketing Consultant is fabulous. They helped us unlock our potential online and offline. We have experienced year on year growth due to their progressive approach.”
                    </h3>
                    <h5>
                        Kate Schadler
                    </h5>
                    <p>Marketing Consultant – Abstract</p>
                </div>
            </div>
            
        </div>
    </section>
</template>

<script>

export default {
    name: 'AppHomeTeam',
    data() {
        return {

        }
    }
}
</script>
<style lang="scss">
    .team {
        padding-bottom: 61px;
        padding-left: 32px;
        padding-right: 32px;
        padding-top: 61px;
    }
    .team .text {
        margin-bottom: 20px;
        margin-top: 20px;
        margin-left: 72.8333px;
        margin-right: 72.8333px
    }

    @include md {
        .team .text {
            margin-left: 0;
            margin-right: 0
        }
    }

    .team .text h3{
        font-size: 32px;
        font-weight: 500;
        letter-spacing: -1.944px;
        line-height: 40.3167px;
        margin: 6px 0 24px;
    }

    @include xs {
        .team .text h3{
            font-size: 22px;
            line-height: 30px;
        }
    }
    
    .team .text h5{
        font-size: 20px;
        font-weight: 400;
        line-height: 32px;
        margin: 12px 0 4px;
    }
    .team .text p{
        font-size: 14px;
        font-weight: 400;
        line-height: 24px;
        margin-bottom: 20px;
    }
    .team .image {
        text-align: center;
    }
    .team .image img {
        border-radius: 8px;
        /* max-width: 550px; */
    }

    
</style>