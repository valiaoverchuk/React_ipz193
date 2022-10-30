const userInfo = {
    firstName: 'Valentyna',
    lastName: 'Overchuk',
    occupation: 'Automation QA'
}

export function Table() {
    return (
        <table>
            <tr>
                <th>First Name</th>
                <td>{userInfo.firstName}</td>
            </tr>
            <tr>
                <th>Last Name</th>
                <td>{userInfo.lastName}</td>
            </tr>
            <tr>
                <th>Occupation</th>
                <td>{userInfo.occupation}</td>
            </tr>
        </table>
    )
}
