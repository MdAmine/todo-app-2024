import {Priority} from "../../types/priority.ts";

const PriorityBadge = ({priority}: { priority: Priority }) => {
    switch (priority) {
        case Priority.P1:
            return <span className="badge text-bg-danger">P1</span>
        case Priority.P2:
            return <span className="badge text-bg-warning">P2</span>
        case Priority.P3:
            return <span className="badge text-bg-info">P3</span>
        case Priority.P4:
            return <span className="badge text-bg-success">P4</span>
        default:
            return null
    }
}

export default PriorityBadge