from enum import Enum

class Status(Enum):
    INACTIVE = "inactive"
    ACTIVE = "active"

class UserType(Enum):
    UserType=["Admin","Customer"]