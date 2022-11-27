<template>
    <div class="security-area pt-100 pb-70">
        <div class="container">
            <div class="section-title text-center">
                <span class="sp-color2">IT Security &amp; Computing</span>
                <h2>Searching for a Solution! We Provide Truly Prominent IT Solutions</h2>
                
            </div>
            <div class="row pt-45">
                <div v-for="service in servicesSection.slice(0, 6)" :key="service.id" class="col-lg-4 col-sm-6" @click="$router.push(`/service/${service.id}`)">
                <div class="security-card">
                    <div class="icon">
                        <font-awesome-icon :icon="service.icon" />
                    </div>
                    <h3>
                        <a href="#">{{service.title}}</a>
                    </h3>
                    <p>{{service.short_description}}</p>
                </div>
                </div>
            </div>
            <div class="customBtn">
                <button class="customBtn" @click="$router.push('/services')">See More</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["servicesSection"],
    mounted() {
        console.log(this.servicesSection)
    }
}
</script>

<style lang="scss">
.section-title {
    margin: 0 auto;
    padding: 0;
    position: relative;
    text-align: center;
}
.security-area .section-title span {
    margin-bottom: 8px;
    font-weight: 600;
    display: block;
    color: var(--main-color);
}
.security-area .section-title h2 {
    max-width: 600px;
    color: #212529;
    font-size: 35px;
    font-weight: 800;
    letter-spacing: -1px;
    line-height: 42px;
    text-align: left;
    margin-top: 10px;
    margin-right: auto;
    margin-bottom: 15px;
    margin-left: auto;
    text-align: center;
}

.security-card {
    box-shadow: 0 0 15px rgba(0,0,0,.07);
    padding: 40px 30px 35px;
    border-radius: 12px;
    background-color: #fff;
    position: relative;
    z-index: 1;
    margin-bottom: 30px;
    color: #212529;
}
.security-card h3 a {
    color: #212529;
}
.security-card:hover h3 a,
.security-card:hover p {
    color: #fff;
}
.security-card::before {
    content: '';
    position: absolute;
    z-index: -1;
    bottom: 0;
    right: 0;
    width: 90px;
    height: 90px;
    background-color:var(--main-color);
    border-radius: 12px;
    opacity: .1;
    -webkit-transition: .7s;
    transition: .7s;
}

.security-card::after {

    content: '';
    position: absolute;
    z-index: -1;
    bottom: 0;
    right: 0;
    width: 75px;
    height: 75px;
    background-color:var(--main-color);
    border-radius: 12px;
    opacity: .1;
    -webkit-transition: .7s;
    transition: .7s;
}
.security-card:hover::before {
    width: 100%;
    height: 100%;
    border-radius: 12px;
    opacity: 1;
}
.security-card .icon {
    font-size: 45px;
    width: 80px;
    height: 80px;
    line-height: 80px;
    color: #fff;
    background-color:var(--main-color);
    border-radius: 12px;
    display: inline-block;
    text-align: center;
    margin-bottom: 12px;
    -webkit-transition: .5s;
    transition: .5s;
}
.security-card:hover .icon {
    font-size: 45px;
    width: 80px;
    height: 80px;
    line-height: 80px;
    color: var(--main-color);
    background-color: #fff;
    border-radius: 12px;
    display: inline-block;
    text-align: center;
    margin-bottom: 12px;
    -webkit-transition: .5s;
    transition: .5s;
}
div.customBtn {
    display: flex;
    justify-content: center;
}
button.customBtn {
    border-radius: 25px 25px 25px 25px;
    padding-bottom: 17px;
    padding-left: 40px;
    padding-right: 40px;
    padding-top: 17px;
    font-weight: 500;
    justify-content: center;
    letter-spacing: 2px;
    font-size: 18px;
    color: rgb(255, 255, 255);
    background-color: #000;
    line-height: 17px;
    min-width: 200px;
    text-transform: uppercase;
    font-family: "Roboto";
    border: none;
    &:hover {
        background-color: var(--main-color);
    }
}
</style>