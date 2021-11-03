import dayjs from 'dayjs'

/** 格式化日期 */
export const formatDate = (date, format = 'YYYY-MM-DD') => dayjs(date).format(format)
