package weavechain_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	keepertest "weavechain/testutil/keeper"
	"weavechain/testutil/nullify"
	"weavechain/x/weavechain"
	"weavechain/x/weavechain/types"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.WeavechainKeeper(t)
	weavechain.InitGenesis(ctx, *k, genesisState)
	got := weavechain.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	// this line is used by starport scaffolding # genesis/test/assert
}
