<template>
    <div>
        <div
            v-if='isMonthActive' 
            :month="month"
            :weeks="weeks"
            class="weekdays"
                >
            <div 
                v-for="i in day" 
                :key="i" class="weekdays-item"
                :class="{weekView: isWeekActive}"
                > 
                {{i}}
            </div>
        </div>
        <div 
            v-if="isWeekActive"
            :month="month"
            :weeks="weeks"
            class="weekdays"
            >
            <div 
                v-for="i in currentWeek "
                :key="i.numberDay" class="weekdays-item"
                :class="{weekView: isWeekActive}"
                > 
                {{i.dayDate}} 
            </div>

        </div>
    </div>
    
</template>

<script>
    export default {
        props: {
            month: Number,
            weeks: Array,
            isWeekActive: Boolean,
            isMonthActive: Boolean,
            weekIndex: Number,

        },
        data() {
            return {
                day: ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]
            }
        },
    computed: {
        date() {
            if (this.isWeekActive) {
                  let currentMonth = this.month;
            currentMonth += 1;
            if(currentMonth < 10) {
                return '/' + '0'+ currentMonth
            }
            return '/' + currentMonth;
            }
          return ''
        },
        currentWeek() {
                if (this.isWeekActive) {
                    let index = this.weekIndex;
                    const weeks = this.weeks;
                    const currentWeek = weeks[index]
                    return currentWeek;
                }
                return []
           
        }
    },
   
    }
</script>

<style lang="less" scoped>
   
    .weekdays {
        display: flex;
        flex-grow: 1;
        background-color: #f5f6fa;
        color: #a3a6b4;
        text-transform: uppercase;
        font-size: .75rem;
        font-weight: 700;
        text-align: center;
        border-bottom: 1px solid #eaf0f4;

        &-item {
            width: calc(100% / 7);
            padding: 15px 0;
        }
       
        }
         .weekView {
            text-transform: none;
        }

</style>