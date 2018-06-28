const expect = require('expect');
const {Users} = require('./users');

describe('Users',()=>{
    var users;

    beforeEach(()=>{
        users = new Users();
        users.users = [{
            id:'1',
            name:'Dennis',
            room:'Net Module'
        },{
            id:'2',
            name:'Ogembo',
            room:'Buffer Module'
        },{
            id:'3',
            name:'Obel',
            room:'Net Module'
        }]
    })
    it('should add new user',()=>{
        var users = new Users();
        var user = {
            id:'123',
            name:'Dennis',
            room: 'The Office Fans'
        }

        var resUser = users.addUser(user.id,user.name,user.room);

        expect(users.users).toEqual([user]);
    })

    it('should return names for Net Module',()=>{
        var userList = users.getUserList('Net Module');

        expect(userList).toEqual(['Dennis','Obel'])
    })

    it('should return names for Buffer Module',()=>{
        var userList = users.getUserList('Buffer Module');

        expect(userList).toEqual(['Ogembo'])
    })

    it('should remove a user',()=>{
        var userId = '1'
        var user = users.removeUser(userId);

        expect(user.id).toBe(userId)
        expect(users.users.length).toBe(2);
    })

    it('should not remove a user',()=>{
        var userId = '11'
        var user = users.removeUser(userId);

        expect(user).toNotExist()
        expect(users.users.length).toBe(3);
    })

    it('should find a user',()=>{
        var userId = '2'
        var user = users.getUser(userId)

        expect(user.id).toBe(userId)
    })

    it('should not find a user',()=>{
        var userId = '4'
        var user = users.getUser(userId);

        expect(user).toNotExist();
    })
})