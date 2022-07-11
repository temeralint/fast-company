export function paginate(users, currentPage, pageSize) {
    const startIndex = (currentPage - 1) * pageSize
    const endIndex = startIndex + pageSize
    return users.slice(startIndex, endIndex)
}