import request from '@/utils/request'

export default {
    // 1 添加课程信息
    addCourseInfo(courseInfo) {
        return request({
            url: '/eduservice/course/addCourseInfo'
            ,method: 'post'
            ,data: courseInfo
        })
    }
    // 查询所有讲师
    ,getListTeacher() {
        return request({
            url: '/eduservice/teacher/findAll'
            ,method: 'get'
        })
    }
    // 根据课程id查询课程基本信息
    ,getCourseInfoId(courseId) {
        return request ({
            url: '/eduservice/course/getCourseInfo/' + courseId 
            ,method: 'get'
        })
    }
    // 修改课程信息
    ,updateCourseInfo(courseInfoVo) {
        return request({
            url: '/eduservice/course/updateCourseInfo'
            ,method: 'post'
            ,data: courseInfoVo
        })
    }
}