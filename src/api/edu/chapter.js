import request from '@/utils/request'

export default {
    // 1 根据课程id获取章节和小节数据列表
    getAllChapterVide(courseId) {
        return request({
            url: `/eduservice/educhapter/getChapterVideo/` + courseId
            ,method: 'get'
        })
    }
}