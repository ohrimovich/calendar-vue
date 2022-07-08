<template>
  <div>
    <CalendarContainer>
      <TitleCalendar />
      <CalendarHeader
        :year="this.year"
        :month="this.month"
        :weeks="this.weeks"
        :weekIndex="this.weekIndex"
        :days="this.days"
        :dayIndex="this.dayIndex"
        @incrementClick="incrementMonth"
        @decrementClick="decrementMonth"
        @todayClick="todayClick"
        @monthClick="showMonth"
        @weekClick="showWeek"
        @dayClick="showDay"
        :isMonthActive="this.isMonthActive"
        :isWeekActive="this.isWeekActive"
        :isDayActive="this.isDayActive"
      ></CalendarHeader>
      <CalendarBorder>
        <template v-if="isMonthActive">
          <WeekDays
            :isMonthActive="this.isMonthActive"
            :isWeekActive="this.isWeekActive"
          />
          <MonthContent
            :days="this.days"
            :day="this.currentDay"
            :weeks="this.weeks"
            :month="this.month"
            :year="this.year"
            :eventsArr="this.eventsArr"
            @showModal="showModal"
          />
        </template>
        <template v-if="isWeekActive">
          <WeekContent
            :isMonthActive="this.isMonthActive"
            :isWeekActive="this.isWeekActive"
            :currentDay="this.currentDay"
            :month="this.month"
            :weeks="this.weeks"
            :year="this.year"
            :weekIndex="this.weekIndex"
            :eventsArr="this.eventsArr"
            @showModal="showModal"
          />
        </template>
        <template v-if="isDayActive">
          <DayContent
            :days="this.days"
            :dayIndex="this.dayIndex"
            :eventsArr="this.eventsArr"
            :currentDay="this.currentDay"
            :year="this.year"
            :month="this.month"
            @showModal="showModal"
          />
        </template>
      </CalendarBorder>
    </CalendarContainer>
    <EventModal
      v-show="isModalVisible"
      @closeModal="closeModal"
      @getEventTime="createEvent"
    />
  </div>
</template>

<script>
import CalendarContainer from "./layout/CalendarContainer.vue";
import TitleCalendar from "./common/TitleCalendar.vue";
import CalendarHeader from "./common/CalendarHeader.vue";
import CalendarBorder from "./layout/CalendarBorder.vue";
import WeekDays from "./common/WeekDays.vue";
import MonthContent from "./views/MonthContent.vue";
import WeekContent from "./views/WeekContent.vue";
import DayContent from "./views/DayContent.vue";
import EventModal from "./common/EventModal.vue";

export default {
  name: "CalendarComponent",
  components: {
    CalendarContainer,
    TitleCalendar,
    CalendarHeader,
    CalendarBorder,
    WeekDays,
    MonthContent,
    WeekContent,
    DayContent,
    EventModal,
  },
  mounted() {
    this.weekIndex = this.getCurrentWeekIndex();
  },
  data() {
    return {
      month: new Date().getMonth(),
      year: new Date().getFullYear(),
      currentDay: new Date().getDate(),
      isMonthActive: true,
      isWeekActive: false,
      isDayActive: false,
      isModalVisible: false,
      clickedDay: "",
      eventsArr: [],
      weekIndex: 0,
      dayIndex: new Date().getDate() + 1,
    };
  },

  computed: {
    firstDayIndex() {
      return new Date(this.year, this.month, 1).getUTCDay();
    },

    days() {
      const days = [];

      const countDayPrevMOnth = this.daysInMonth(this.year, this.month - 1);
      for (
        let i = countDayPrevMOnth;
        i > countDayPrevMOnth - this.firstDayIndex;
        i -= 1
      ) {
        days.unshift(this.createDay(i, this.year, this.month - 1, false));
      }
      for (let i = 0; i < this.daysInMonth(this.year, this.month); i += 1) {
        days.push(this.createDay(i + 1, this.year, this.month));
      }
      for (
        let i = 0;
        i <
        6 -
          ((this.daysInMonth(this.year, this.month) + this.firstDayIndex + 1) %
            10);
        i += 1
      ) {
        days.push(this.createDay(i + 1, this.year, this.month + 1, false));
      }

      return days;
    },
    weeks() {
      let days = this.days;
      let size = 7;
      let arrOfWeeks = [];
      for (let i = 0; i < Math.ceil(days.length / size); i++) {
        arrOfWeeks[i] = days.slice(i * size, i * size + size);
      }
      return arrOfWeeks;
    },
  },
  methods: {
    daysInMonth(year, month) {
      return new Date(year, month + 1, 0).getDate();
    },
    createDay(i, year, month, inCurrentMonthDay = true) {
      return {
        numberDay: i,
        dayDate: `${new Date(year, month, i).toLocaleDateString("en", {
          weekday: "short",
        })} ${i < 10 ? "0" + i : i}/${
          month + 1 < 10 ? "0" + (month + 1) : month + 1
        }`,
        monthDay: `${new Date(year, month, i).toLocaleDateString("en", {
          month: "short",
        })} ${i}`,
        clickDateCheck: `${i + "/" + month + "/" + year}`,
        inCurrentMonthDay: inCurrentMonthDay,
      };
    },
    incrementMonth() {
      if (this.isMonthActive) {
        this.month += 1;

        if (this.month > 11) {
          this.month = -1;
          this.month += 1;
          this.year += 1;
        }
      } else if (this.isWeekActive) {
        this.weekIndex += 1;
        if (this.weeks.length - 1 === this.weekIndex) {
          this.month += 1;
          this.weekIndex = 0;
        }
      } else if (this.isDayActive) {
        this.dayIndex += 1;
        if (this.days.length - 1 === this.dayIndex) {
          this.month += 1;
          this.dayIndex = 0;
        }
      }
    },
    decrementMonth() {
      if (this.isMonthActive) {
        this.month -= 1;

        if (this.month < 0) {
          this.month = 12;
          this.month -= 1;
          this.year -= 1;
        }
      } else if (this.isWeekActive) {
        this.weekIndex -= 1;
        if (this.weekIndex <= 0) {
          this.month -= 1;
          this.weekIndex = this.getNumberOfWeeks() - 1;
          if (this.month < 0) {
            this.month = 12;
            this.month -= 1;
            this.year -= 1;
            this.weekIndex = this.getNumberOfWeeks() - 1;
          }
        }
      } else if (this.isDayActive) {
        this.dayIndex -= 1;
        if (this.dayIndex < 0) {
          this.month -= 1;
          this.dayIndex = this.days.length - 1;
        }
      }
    },
    getNumberOfWeeks() {
      let date = new Date(this.year, this.month + 1, 0);
      return (
        Math.ceil((date.getDate() - (date.getDay() ? date.getDay() : 7)) / 7) +
        1
      );
    },
    getCurrentWeekIndex() {
      for (let i = 0; i < this.weeks.length; i += 1) {
        for (let j = 0; j < this.weeks[i].length; j += 1) {
          if (this.weeks[i][j].numberDay === this.currentDay) {
            return i;
          }
        }
      }
    },
    getCurrentDate() {
      this.month = new Date().getMonth();
      this.year = new Date().getFullYear();
    },
    todayClick() {
      if (this.isMonthActive) {
        this.getCurrentDate();
      } else if (this.isWeekActive) {
        this.getCurrentDate();
        this.weekIndex = this.getCurrentWeekIndex();
      } else if (this.isDayActive) {
        this.getCurrentDate();
        this.dayIndex = new Date().getDate() + 1;
      }
    },
    showMonth() {
      this.isMonthActive = true;
      this.isWeekActive = false;
      this.isDayActive = false;
    },
    showWeek() {
      this.isMonthActive = false;
      this.isWeekActive = true;
      this.isDayActive = false;
    },
    showDay() {
      this.isMonthActive = false;
      this.isWeekActive = false;
      this.isDayActive = true;
    },
    showModal(i, month, year) {
      this.clickedDay = `${i + "/" + month + "/" + year}`;
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    createEvent(data) {
      this.closeModal();
      if (data) {
        this.eventsArr.push({
          day: this.clickedDay,
          startTime: data.startTime,
          timeAsNumber: data.timeAsNumber,
          startTimeAsNumber: data.startTimeAsNumber,
        });
        this.eventsArr.sort(
          (a, b) => a.startTimeAsNumber - b.startTimeAsNumber
        );
        return this.eventsArr;
      }
      return this.eventsArr;
    },
  },
};
</script>
