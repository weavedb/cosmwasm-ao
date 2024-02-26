package keeper

import (
	"weavechain/x/weavechain/types"
)

var _ types.QueryServer = Keeper{}
