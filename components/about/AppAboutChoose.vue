<template>
    <div class="choose-area pt-100 pb-70">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <div class="choose-content mr-20">
                        <div class="section-title">
                            <span class="sp-color1">{{whySection.find(one => one.key === 'why_choose_us_title').value}}</span>
                            <h2>{{whySection.find(one => one.key === 'why_choose_us_sub_title').value}}</h2>
                            <p>
                                {{whySection.find(one => one.key === 'why_choose_us_description').value}}
                            </p>
                        </div>
                        <div class="row">
                            <div v-for="item in whySection.find(one => one.key === 'why_choose_us_list').value" :key="item" class="col-lg-6 col-6">
                                <div class="choose-content-card">
                                    <div class="content">
                                        <font-awesome-icon :icon="item.icon" />
                                        <h3>{{item.title}}</h3>
                                    </div>
                                    <p>{{item.description}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="choose-img">
                        <img :src="whySection.find(one => one.key === 'why_choose_us_image').value" alt="Images">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AppAboutChoose',
    props: ["whySection"]
}
</script>

<style>
.choose-area {
    background-color: var(--main-color);
}
.choose-area .choose-content {
    margin-bottom: 30px;
    margin-right: 20px;
}
.choose-area .section-title {
  margin: 0 auto ;
  padding: 0;
  position: relative;
  text-align: start;
}
.choose-area .section-title span {
    margin-bottom: 8px;
    font-weight: 600;
    display: block;
    color:#fff;
}
.choose-content .section-title h2 {
    color: #fff;
    font-size: 35px;
    font-weight: 800;
    letter-spacing: -1px;
    line-height: 42px;
    text-align: left;
    margin-top: 10px;
    margin-right: 0px;
    margin-bottom: 15px;
    margin-left: 0px;
}
.choose-area .choose-content .section-title p {
    color: #fff;
    padding-top: 10px;
    margin-bottom: 0;
    max-width: 530px;
}
.choose-area .choose-content .choose-content-card {
    margin-top: 15px;
}
.choose-area .choose-content .choose-content-card .content {
    padding-top: 20px;
    position: relative;
    padding-left: 75px;
}
.choose-area .choose-content .choose-content-card .content svg {
    position: absolute;
    top: 10px;
    left: 0;
    font-size: 60px;
    color:#fff;
    line-height: 1;
}
.choose-area .choose-content .choose-content-card .content h3 {
    margin-top: 10px;
    margin-bottom: 30px;
    font-weight: 800;
    color: #fff;
    font-size: 22px;
}
.choose-area .choose-content .choose-content-card p {
    margin-top: 5px;
    margin-bottom: 0;
    color: #fff;
}
.choose-area .choose-img {
    margin-bottom: 30px;
}
.choose-area .choose-img img {
  border-radius: 15px;
}
</style>