package keeper_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	testkeeper "weavechain/testutil/keeper"
	"weavechain/x/weavechain/types"
)

func TestGetParams(t *testing.T) {
	k, ctx := testkeeper.WeavechainKeeper(t)
	params := types.DefaultParams()

	k.SetParams(ctx, params)

	require.EqualValues(t, params, k.GetParams(ctx))
}
