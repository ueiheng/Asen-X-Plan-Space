<template>
    <div>
        <div class="card-content">
            <div class="card-icon-wrap">
                <div class="card-icon">{{ icon }}</div>
            </div>
            <div class="card-description">{{ description }}</div>
            <div class="card-details">{{ details }}</div>
            <div class="card-more"><a :href = "pathUrl" >Learn more</a></div>
        </div>
    </div>
</template>
    
<script setup>
/** Card组件
 * 必传参数icon,description,details
 * 
 */

const props = defineProps({
    icon: String,
    description: String,
    details: String,
    pathUrl: String,
});

</script>
    
<style>
.card-content {
    width: 320px;
    height: 200px;
    /* background-color: #f4f5f5; */
    display: flex;
    flex-direction: column;
    transition: all 0.25s;
    border: #e8e8e8 1px solid;
    border-radius: 10px;
    padding: 20px;
}

.card-content:hover {
    /* background-color: #fff; */
    border-color: #8cf988;
}

.card-icon-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    border-radius: 6px;
    background-color: var(--vp-c-bg-soft-down);
    width: 48px;
    height: 48px;
    font-size: 24px;

}


.card-description {
    font-size: 18px;
    font-weight: 600;
}

.card-details {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    font-size: 12px;
}

.card-more a {
    font-weight: 700;
}
</style>