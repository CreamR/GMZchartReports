export const runCheck = (): void => {
    const nowHour: number | string | null = new Date().getHours()
    const nowMin: number | string | null = new Date().getMinutes()
  
    // This is a ECMAScript2020 new trait, For instead of ||
    // -2022-10-05 Gmz BUG FIX
    // when you first advent, The system probably dont work. Cause the starTime and endTime is null, But now this problem is resolved!
    const setedStarTime: null | string =
      localStorage.getItem('darkModeStarTime') ?? null
    const setedEndTime: null | string =
      localStorage.getItem('darkModeEndTime') ?? null
  
    if (setedStarTime && setedEndTime) {
      if (parseInt(setedStarTime.slice(0, 2)) <= nowHour) {
        if (
          parseInt(setedStarTime.slice(0, 2)) == nowHour &&
          parseInt(setedStarTime.slice(3, 5)) > nowMin
        ) {
          console.log('invalid time')
          // set common mode
          localStorage.setItem('vueuse-color-scheme', 'auto')
        } else {
          if (parseInt(setedEndTime.slice(0, 2)) >= nowHour) {
            if (
              parseInt(setedEndTime.slice(0, 2)) == nowHour &&
              parseInt(setedEndTime.slice(3, 5)) < nowMin
            ) {
              console.log('invalid time')
              // set common mode
              localStorage.setItem('vueuse-color-scheme', 'auto')
            } else {
              // set dark mode
              localStorage.setItem('vueuse-color-scheme', 'dark')
            }
          }
        }
      } else {
        console.log('invalid time')
        // set common mode
        localStorage.setItem('vueuse-color-scheme', 'auto')
      }
    }
  }
  