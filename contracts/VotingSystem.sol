// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract VotingSystem {
    struct Candidate {
        uint256 id;
        string name;
        uint256 voteCount;
    }

    mapping(address => bool) public hasVoted;
    Candidate[] public candidates;

   

    event VoteCasted(uint256 indexed candidateId, address voter);

    constructor() {
        candidates.push(Candidate(0, "Tinubu", 0));
        candidates.push(Candidate(1, "Atiku", 0));
        candidates.push(Candidate(2, "Peter Obi", 0));
    }

    function castVote(uint256 _candidateId) external {
        require(_candidateId < candidates.length, "Invalid candidate ID");
        require(!hasVoted[msg.sender], "Already voted");

        candidates[_candidateId].voteCount++;
        hasVoted[msg.sender] = true;

        emit VoteCasted(_candidateId, msg.sender);
    }

    function getCandidateCount() external view returns (uint256) {
        return candidates.length;
    }

    function getCandidate(uint256 _candidateId) external view returns (string memory, uint256) {
        require(_candidateId < candidates.length, "Invalid candidate ID");

        Candidate memory candidate = candidates[_candidateId];
        return (candidate.name, candidate.voteCount);
    }
}

