pragma solidity >=0.4.16 <0.9.0;

contract receiveEth {
    address public owner;
    uint public amount;

    function reeive_Eth() public payable {
        owner = msg.sender;
        // 送金されたETHの値はmsg.valueで取得
        amount = msg.value;
        // 受け取ったアドレスとmsg.valueをDBへ保存する
        // return ;
    }
}

contract sendETH {
    function send_ETH(address payable _to) public payable {
        (bool sent, bytes memory data) = _to.call{value: msg.value}("");
        require(sent, "Failed to send Ether");
    }
}