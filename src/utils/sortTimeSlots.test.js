import sortTimeSlots from './sortTimeSlots'

describe('sortTimeSlots', () => {
  it('should sort correct collection of time slots by their end time values', () => {

    const input = [
      {
        end_time: '2018-07-09T09:30:00.000+02:00'
      },
      {
        end_time: '2018-07-10T09:30:00.000+02:00'
      },
      {
        end_time: '2018-07-07T09:30:00.000+02:00'
      },
      {
        end_time: '2018-07-09T11:27:00.000+02:00'
      }
    ]

    const expected = [
      {
        end_time: '2018-07-07T09:30:00.000+02:00'
      },
      {
        end_time: '2018-07-09T09:30:00.000+02:00'
      },
      {
        end_time: '2018-07-09T11:27:00.000+02:00'
      },
      {
        end_time: '2018-07-10T09:30:00.000+02:00'
      }
    ]

    input.sort(sortTimeSlots)

    expect(input).toEqual(expected)
  })

  it('should sort incorrect collection of time slots by their end time values', () => {

    const input = [
      {
        end_time: '2018-07-09T09:30:00.000+02:00'
      },
      {
        something_otherworldly: '2018-07-10T09:30:00.000+02:00'
      },
      {
        end_time: '2018-07-07T09:30:00.000+02:00'
      },
      {
        end_time: '2018-07-09T11:27:00.000+02:00'
      }
    ]

    const expected = [
      {
        end_time: '2018-07-07T09:30:00.000+02:00'
      },
      {
        end_time: '2018-07-09T09:30:00.000+02:00'
      },
      {
        end_time: '2018-07-09T11:27:00.000+02:00'
      },
      {
        something_otherworldly: '2018-07-10T09:30:00.000+02:00'
      }
    ]

    input.sort(sortTimeSlots)

    expect(input).toEqual(expected)
  })

  it('should sort collection of time slots by their end time values, with inclusions of equal values', () => {

    const input = [
      {
        end_time: '2018-07-09T09:30:00.000+02:00'
      },
      {
        end_time: '2018-07-10T09:30:00.000+02:00'
      },
      {
        end_time: '2018-07-07T09:30:00.000+02:00'
      },
      {
        end_time: '2018-07-09T09:30:00.000+02:00'
      }
    ]

    const expected = [
      {
        end_time: '2018-07-07T09:30:00.000+02:00'
      },
      {
        end_time: '2018-07-09T09:30:00.000+02:00'
      },
      {
        end_time: '2018-07-09T09:30:00.000+02:00'
      },
      {
        end_time: '2018-07-10T09:30:00.000+02:00'
      }
    ]

    input.sort(sortTimeSlots)

    expect(input).toEqual(expected)
  })

})